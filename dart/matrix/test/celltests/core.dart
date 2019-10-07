import 'package:matrix/src/cells/cell_base.dart';
import 'package:test/test.dart';
import 'package:matrix/cell.dart';

//void xtest () {
//  group('A second group of tests', () {
//    Awesome awesome;
//
//    setUp(() {
//      awesome = Awesome();
//    });
//
//    test('First Test', () {
//      expect(awesome.isAwesome, isTrue);
//    });
//  });
//}


void coreTest () {
  group('cells init', () {
    setUp(() {
      cellsReset();
    });

    test('init cells', () {
      expect( gpulse(), 0);
    });
  });
  group('make a simple input cell', () {
    cell c;

    setUp(() {
      cellsReset();
    });

    test('building input cell with value', () {
      cell c = cI( 42, {"name" : "moi"});
      expect( c.inputp, true);
      expect( c.v, 42);
    });

    test('changing input cell, no init', () {
      cell c = cI( 42 );
      expect( c.v, 42);
      c.v = 11;
      expect( c.v, 11);
    });

    test('changing input cell with increment operator', () {
      cell c = cI( 11);
      expect( c.v, 11);
      ++c.v ;
      expect( c.v, 12);
    });

    test('changing input cell with post increment operator', () {
      cell c = cI( 42);
      expect( c.v++, 42);
      expect( c.v, 43);
    });
  });
}

/*
(deftest test-input
  (let [c (make-cell
             :slot :mol
             :value 42)]
    (is (ia-type? c ::cty/cell))
    (is (= (c-value c) 42))
    (is (= (c-value-state c) :valid))
    (is (= #{} (c-callers c)))
    (is (c-input? c))
    (is (nil? (c-model c)))
    (is (= :mol (c-slot c)))
    ))
 */