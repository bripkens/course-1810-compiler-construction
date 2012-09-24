var ex1 = require('../lib/ex1.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['isValidGeographicCoordinate'] = {
  setUp: function(done) {
    done();
  },
  'empty': function(test) {
    test.expect(1);
    test.equal(ex1.isValidGeographicCoordinate(''), false);
    test.done();
  },
  'latitude': function(test) {
    test.equal(ex1.isValidGeographicCoordinate("N0°0'0\""), true);
    test.equal(ex1.isValidGeographicCoordinate("N90°0'0\""), true);
    test.equal(ex1.isValidGeographicCoordinate("N55°0'0\""), true);
    test.equal(ex1.isValidGeographicCoordinate("N91°0'0\""), false);
    test.equal(ex1.isValidGeographicCoordinate("N99°0'0\""), false);
    test.equal(ex1.isValidGeographicCoordinate("N89°0'0\""), true);
    test.equal(ex1.isValidGeographicCoordinate("N09°0'0\""), false);
    test.equal(ex1.isValidGeographicCoordinate("N180°0'0\""), false);

    test.equal(ex1.isValidLatitude("N0"), true);
    test.equal(ex1.isValidLatitude("S0"), true);
    test.equal(ex1.isValidLatitude("N 0"), true);
    test.equal(ex1.isValidLatitude("N 90"), true);
    test.equal(ex1.isValidLatitude("N 1"), true);
    test.equal(ex1.isValidLatitude("N 91"), false);
    test.equal(ex1.isValidLatitude("N -5"), false);

    test.done();
  },
  'longitude': function(test) {
    test.equal(ex1.isValidGeographicCoordinate("E180°0'0\""), true);
    test.equal(ex1.isValidGeographicCoordinate("W180°0'0\""), true);
    test.equal(ex1.isValidGeographicCoordinate("W100°0'0\""), true);
    test.equal(ex1.isValidGeographicCoordinate("W050°0'0\""), false);
    test.equal(ex1.isValidGeographicCoordinate("W50°0'0\""), true);
    test.equal(ex1.isValidGeographicCoordinate("W05°0'0\""), false);

    test.ok(ex1.isValidLongitude("E0"));
    test.ok(ex1.isValidLongitude("W0"));
    test.ok(ex1.isValidLongitude("E 0"));
    test.ok(ex1.isValidLongitude("W 0"));
    test.ok(ex1.isValidLongitude("W 180"));
    test.ok(!ex1.isValidLongitude("W 090"));
    test.ok(!ex1.isValidLongitude("W 099"));
    test.ok(ex1.isValidLongitude("W 99"));
    test.ok(ex1.isValidLongitude("W 1"));
    test.ok(ex1.isValidLongitude("W 150"));
    test.ok(ex1.isValidLongitude("W 189"));

    test.done();
  },
  'minutes': function(test) {
    test.equal(ex1.isValidGeographicCoordinate("N0°0'0\""), true);
    test.equal(ex1.isValidGeographicCoordinate("N0°59'0\""), true);
    test.equal(ex1.isValidGeographicCoordinate("N0°1'0\""), true);
    test.equal(ex1.isValidGeographicCoordinate("N0°60'0\""), false);

    test.ok(ex1.isValidArcminute("59"));
    test.ok(ex1.isValidArcminute("1"));
    test.ok(ex1.isValidArcminute("0"));
    test.ok(!ex1.isValidArcminute("60"));
    test.ok(!ex1.isValidArcminute("-1"));

    test.done();
  },
  'seconds': function(test) {
    test.ok(ex1.isValidArcsecond("59"));
    test.ok(ex1.isValidArcsecond("1"));
    test.ok(ex1.isValidArcsecond("0"));
    test.ok(!ex1.isValidArcsecond("60"));
    test.ok(!ex1.isValidArcsecond("-1"));
    test.ok(ex1.isValidArcsecond("59.1231241"));
    test.ok(!ex1.isValidArcsecond("59."));

    test.done();
  }

};
