var ex2 = require('../lib/ex2.js');

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
  'taskA': function(test) {
    test.ok(!ex2.taskA(''));
    test.ok(!ex2.taskA('0'));
    test.ok(!ex2.taskA('0321'));

    test.ok(ex2.taskA('1'));
    test.ok(ex2.taskA('9'));
    test.ok(ex2.taskA('132131'));

    test.done();
  },
  'taskB': function(test) {
    test.ok(ex2.taskB('5'));
    test.ok(ex2.taskB('10'));
    test.ok(ex2.taskB('50'));
    test.ok(ex2.taskB('100'));
    test.ok(ex2.taskB('105'));

    test.ok(!ex2.taskB('1'));
    test.ok(!ex2.taskB('2'));
    test.ok(!ex2.taskB('11'));

    test.done();
  }
};
