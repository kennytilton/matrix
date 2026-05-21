# CellsPython

Minimal Python port of the JavaScript Matrix Cells core.

Current scope:

- input cells via `cI`
- formula cells via `cF`
- dynamic dependency tracking
- propagation on input assignment
- observers
- model-mediated property access

Example:

```python
from cells_py import Model, cF, cI

arm = Model("arm", {
    "qpos": cI(0.0),
    "target": cI(1.0),
    "error": cF(lambda c: c.md.target - c.md.qpos),
    "ctrl": cF(lambda c: 4.0 * c.md.error),
})

arm.qpos = 0.25
print(arm.ctrl)
```
