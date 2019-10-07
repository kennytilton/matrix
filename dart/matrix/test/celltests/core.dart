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
  group('make a simple input cell', () {
    cell c;

    setUp(() {
      c = cI( 42, {"name" : "moi"});
      clg1('set up done', c.inputp);
    });

    test('First Test', () {
      clg2("inputp?", c.v, c.inputp);
      expect( c.v, 42);
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