var Benchmark = require('benchmark');
var tb = require('travis-benchmark');

var utils = require('./utils.js');

var n1 = utils.n1;
var n2 = utils.n2;
var n3 = utils.n3;
var n4 = utils.n4;
var s1 = utils.s1;
var s2 = utils.s2;
var s3 = utils.s3;
var s4 = utils.s4;
var o1 = utils.o1;
var o2 = utils.o2;
var a1 = utils.a1;
var a2 = utils.a2;
var f = function() {};

var suite = new Benchmark.Suite(`built-in`);

require('./new.js')(suite);
require('./operators.js')(suite);

suite.add('if (true) { null; } else { null; }', function() {
  if (true) {
    null;
  } else {
    null;
  }
});

suite.add('if (false) { null; } else { null; }', function() {
  if (false) {
    null;
  } else {
    null;
  }
});

suite.add('true ? null : null', function() {
  true ? null : null
});

suite.add('false ? null : null', function() {
  false ? null : null
});

(function() {
  var A = function() {};
  var a = new A();
  var B = function() {};
  B.prototype = a;
  var b = new B();
  var C = function() {};
  C.prototype = b;
  var c = new C();
  var D = function() {};
  D.prototype = c;
  var d = new D();
  suite.add('d instanceof A', function() {
    d instanceof A;
  });
  suite.add('c instanceof A', function() {
    c instanceof A;
  });
  suite.add('b instanceof A', function() {
    b instanceof A;
  });
  suite.add('a instanceof A', function() {
    a instanceof A;
  });
})();

suite.add('eval("")', function() {
  eval('');
});

suite.add('typeof [undefined]', function() { typeof undefined; });
suite.add('typeof [null]', function() { typeof null; });
suite.add('typeof [number]', function() { typeof n3; });
suite.add('typeof [string]', function() { typeof s3; });
suite.add('typeof [object]', function() { typeof o2; });
suite.add('typeof [array]', function() { typeof a2; });
suite.add('typeof [function]', function() { typeof f; });

tb.wrapSuite(suite);
suite.run({ async: true });
