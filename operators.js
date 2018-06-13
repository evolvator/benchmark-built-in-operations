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
  
module.exports = function(suite) {
  var arithmetic = ['+','-','*','/','%'];
  var ment = ['++','--'];
  var comparasion = ['<','<=','>','>=','==','===','!=','!=='];
  var assignment = ['+=','-=','*=','/=','%='];
  
  var arithmeticSuite = function(a, b, arithmetic) {
    suite.add(`${a} ${arithmetic} ${b}`, new Function(`a ${arithmetic} b`));
  };
  for (var a in arithmetic) {
    arithmeticSuite(n1, n1, arithmetic[a]);
    arithmeticSuite(n3, n4, arithmetic[a]);
    arithmeticSuite(s1, s2, arithmetic[a]);
    arithmeticSuite(s3, s4, arithmetic[a]);
  }
  
  var prefixSuite = function(a, ment) {
    var temp = a;
    suite.add(`${ment}${a}`, new Function(`${ment}temp`));
  };
  var postfixSuite = function(a, ment) {
    var temp = a;
    suite.add(`${a}${ment}`, new Function(`temp${ment}`));
  };
  for (var a in ment) {
    prefixSuite(n1, ment[a]);
    postfixSuite(n1, ment[a]);
    prefixSuite(n3, ment[a]);
    postfixSuite(n3, ment[a]);
  }
  
  var comparasionSuite = function(a, b, comparasion) {
    suite.add(`${utils.f(a)} ${comparasion} ${utils.f(b)}`, new Function(`a ${comparasion} b`));
  };
  for (var a in comparasion) {
    comparasionSuite(n1, n2, comparasion[a]);
    comparasionSuite(n3, n4, comparasion[a]);
    comparasionSuite(s1, s2, comparasion[a]);
    comparasionSuite(s3, s4, comparasion[a]);
    comparasionSuite(n3, s3, comparasion[a]);
  }
  
  var assignmentSuite = function(a, b, assignment) {
    var temp = a;
    suite.add(`${utils.f(a)} ${assignment} ${utils.f(b)}`, new Function(`temp ${assignment} b`));
  };
  for (var a in assignment) {
    assignmentSuite(n1, n2, assignment[a]);
    assignmentSuite(n3, n4, assignment[a]);
    assignmentSuite(s1, s2, assignment[a]);
    assignmentSuite(s3, s4, assignment[a]);
    assignmentSuite(n3, s4, assignment[a]);
  }
  
  suite.add('[object](1) .', function() { o1._0; });
  suite.add('[object](1) []', function() { o1['_0']; });
  
  suite.add('[object](1024) .', function() { o2._543; });
  suite.add('[object](1024) []', function() { o2['_543']; });
  
  suite.add('[array](1) []', function() { a1[0]; });
  suite.add('[array](1024) []', function() { a2[543]; });
  
  suite.add('! not [boolean]', function() { !true });
  suite.add('! not [number]', function() { !n3 });
  suite.add('! not [string]', function() { !s3 });
  suite.add('! not [object]', function() { !o2 });
  suite.add('! not [array]', function() { !a2 });
};
