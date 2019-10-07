/// Support for doing something with transparent reactive dataflow.

library cells;

import 'src/cells/cell_base.dart';
export 'src/cells/cell_base.dart' show cell, clg, clg1, clg2, clg3, clg4;
import 'src/cells/integrity.dart';
// TODO: Export any libraries intended for clients of this package.

/// Checks if you are awesome. Spoiler: you are.
class Awesome {
  bool get isAwesome => true;
}

cell cF(formula, [options]) {
  // make a conventional formula cell
  return cell(null, formula, cNetOptions(options, null));
}

cell cF1(formula, [options]) {
  return cell(null, withoutCDependency(formula),
      cNetOptions(options, null));
}

cell cF_(formula, [options]) {
  return cell(null, formula,
      cNetOptions(options, {"lazy": cLazy.kAlways}));
}

cell c_F(formula, [options]) {
  return cell(null, formula,
      cNetOptions(options, {"lazy": cLazy.kUntilAsked}));
}

cell cFI(formula, [options]) {
  /*
	 make a cell whose formula runs once for
	 its initial value but then is set procedurally
	 as an input cell.
	 */
  return cell(null, formula,
      cNetOptions(options, {"inputp": true}));
}

cell cI(value, [options]) {
  // standard input cell
  clg2("cI", options, cNetOptions(options, {"inputp": true}));
  return cell(value, null,
      cNetOptions(options, {"inputp": true}));
}

cell cIe(value, [options]) {
  // ephemeral input cell
  return cell( value, null,
      cNetOptions(options, {"inputp": true, "ephemeralp": true}));
}

void obsDbg(name, me, newv, priorv, c) {
  clg("obsDbg! ${name} ${me != null ? (me.name ? me.name : me.id) : 'noMd'} useds=${c.useds.length} new=${newv} prior=${priorv == kUnboundValue ? 'unbound' : priorv}");
//    console.log(`OBS: ${name} now ${newv} (was ${priorv})`);
}

void XobsDbg(name, me, newv, priorv, c) {
  // handy way to hush obsDbg until sure not needed
}
