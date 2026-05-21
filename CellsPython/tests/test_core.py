from cells_py import Model, cF, cI, cells_reset


def test_formula_recomputes_from_input_change():
    cells_reset()
    m = Model(
        "m",
        {
            "x": cI(2),
            "double": cF(lambda c: c.md.x * 2),
        },
    )

    assert m.double == 4
    m.x = 7
    assert m.double == 14


def test_dynamic_dependencies_change_with_branch():
    cells_reset()
    m = Model(
        "m",
        {
            "use_a": cI(True),
            "a": cI(10),
            "b": cI(20),
            "pick": cF(lambda c: c.md.a if c.md.use_a else c.md.b),
        },
    )

    assert m.pick == 10
    m.b = 21
    assert m.pick == 10
    m.use_a = False
    assert m.pick == 21
    m.a = 11
    assert m.pick == 21


def test_observer_sees_changes():
    cells_reset()
    seen = []
    m = Model(
        "m",
        {
            "x": cI(1),
            "y": cF(lambda c: c.md.x + 1, observer=lambda slot, md, new, old, cell: seen.append((slot, new))),
        },
    )

    assert m.y == 2
    m.x = 4
    assert m.y == 5
    assert seen[-1] == ("y", 5)
