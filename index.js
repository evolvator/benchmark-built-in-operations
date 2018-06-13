var Benchmark = require('benchmark');
var tb = require('travis-benchmark');
var beauty = require('beautify-benchmark');
var _ = require('lodash');
var async = require('async');

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

suite.add('typeof [undefined]', function() { typeof undefined; });
suite.add('typeof [null]', function() { typeof null; });
suite.add('typeof [number]', function() { typeof n3; });
suite.add('typeof [string]', function() { typeof s3; });
suite.add('typeof [object]', function() { typeof o2; });
suite.add('typeof [array]', function() { typeof a2; });
suite.add('typeof [function]', function() { typeof f; });

suite.on('error', function(error) {
  console.log(error);
});
suite.on('cycle', function (event) { beauty.add(event.target); });
suite.on('complete', function(event) {
  beauty.log();
  tb.saveSuite(
    tb.parseSuite(event),
    function(error) {}
  );
});

suite.run({ async: true });