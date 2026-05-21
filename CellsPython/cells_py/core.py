from __future__ import annotations

from contextlib import contextmanager
from typing import Any, Callable


class _Unbound:
    def __repr__(self) -> str:
        return "UNBOUND"


UNBOUND = _Unbound()

_pulse = 0
_depender: Cell | None = None
_call_stack: list[Cell] = []


def cells_reset() -> None:
    global _pulse, _depender, _call_stack
    _pulse = 0
    _depender = None
    _call_stack = []


def _next_pulse() -> int:
    global _pulse
    _pulse += 1
    return _pulse


@contextmanager
def without_dependency():
    global _depender
    prior = _depender
    _depender = None
    try:
        yield
    finally:
        _depender = prior


class Cell:
    def __init__(
        self,
        value: Any = UNBOUND,
        formula: Callable[[Cell], Any] | None = None,
        inputp: bool = False,
        observer: Callable[[str, Model | None, Any, Any, Cell], None] | None = None,
        name: str | None = None,
    ) -> None:
        self.name = name or "anon"
        self.md: Model | None = None
        self.rule = formula
        self.inputp = inputp
        self.observer = observer
        self.value = value
        self.pulse = -1 if formula else _pulse
        self.pulse_last_changed = -1
        self.callers: set[Cell] = set()
        self.useds: set[Cell] = set()

    def get(self) -> Any:
        global _depender
        value = self.ensure_current()
        if _depender is not None:
            _depender.record_dependency(self)
        return value

    def set(self, value: Any) -> Any:
        if not self.inputp:
            raise TypeError(f"Cannot set formula cell {self.name}")
        _next_pulse()
        return self.assume(value)

    def record_dependency(self, used: Cell) -> None:
        self.useds.add(used)
        used.callers.add(self)

    def unlink_from_used(self) -> None:
        for used in list(self.useds):
            used.callers.discard(self)
        self.useds.clear()

    def ensure_current(self) -> Any:
        if self.rule is None:
            return self.value
        if self.pulse >= _pulse and self.value is not UNBOUND:
            return self.value

        recalc = self.value is UNBOUND
        if not recalc:
            for used in list(self.useds):
                used.ensure_current()
                if used.pulse_last_changed > self.pulse:
                    recalc = True
                    break

        if recalc:
            return self.calc_and_set()

        self.pulse = _pulse
        return self.value

    def calc_and_set(self) -> Any:
        global _depender
        if self in _call_stack:
            cycle = " -> ".join(c.name for c in [*_call_stack, self])
            raise RuntimeError(f"Cyclic dependency: {cycle}")

        prior_depender = _depender
        _depender = self
        _call_stack.append(self)
        self.unlink_from_used()
        try:
            new_value = self.rule(self)
        finally:
            _call_stack.pop()
            _depender = prior_depender

        return self.assume(new_value)

    def assume(self, new_value: Any) -> Any:
        prior = self.value
        changed = prior is UNBOUND or new_value != prior
        self.value = new_value
        self.pulse = _pulse
        if changed:
            self.pulse_last_changed = _pulse
            self.propagate(prior)
        return new_value

    def propagate(self, prior: Any) -> None:
        for caller in list(self.callers):
            if caller.rule is not None:
                caller.calc_and_set()
        self.observe(prior)

    def observe(self, prior: Any) -> None:
        if self.observer is not None:
            self.observer(self.name, self.md, self.value, prior, self)


def cI(value: Any = None, *, observer=None) -> Cell:
    return Cell(value=value, inputp=True, observer=observer)


def cF(formula: Callable[[Cell], Any], *, observer=None) -> Cell:
    return Cell(formula=formula, inputp=False, observer=observer)


class Model:
    def __init__(
        self,
        name: str | None = None,
        slots: dict[str, Any] | None = None,
        parent: Model | None = None,
    ) -> None:
        object.__setattr__(self, "name", name)
        object.__setattr__(self, "parent", parent)
        object.__setattr__(self, "cells", {})
        object.__setattr__(self, "_plain", {})

        for slot, value in (slots or {}).items():
            self._install(slot, value)

    def _install(self, slot: str, value: Any) -> None:
        if isinstance(value, Cell):
            value.name = slot
            value.md = self
            self.cells[slot] = value
        else:
            self._plain[slot] = value

    def __getattr__(self, slot: str) -> Any:
        cells = object.__getattribute__(self, "cells")
        if slot in cells:
            return cells[slot].get()
        plain = object.__getattribute__(self, "_plain")
        if slot in plain:
            return plain[slot]
        raise AttributeError(slot)

    def __setattr__(self, slot: str, value: Any) -> None:
        if slot in {"name", "parent", "cells", "_plain"}:
            object.__setattr__(self, slot, value)
            return
        cells = object.__getattribute__(self, "cells")
        if slot in cells:
            cells[slot].set(value)
            return
        plain = object.__getattribute__(self, "_plain")
        if slot in plain:
            raise AttributeError(f"Slot {slot} is not mediated by an input Cell")
        self._install(slot, value)
