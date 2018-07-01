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
var m1 = utils.m1;
var m2 = utils.m2;

module.exports = function(suite) {
  var arithmetic = ['+', '-', '*', '/', '%'];
  var ment = ['++', '--'];
  var comparasion = ['<', '<=', '>', '>=', '==', '===', '!=', '!=='];
  var assignment = ['+=', '-=', '*=', '/=', '%='];

  var arithmeticSuite = function(a, b, arithmetic) {
    eval(
      `suite.add('${utils.f(a)} ${arithmetic} ${utils.f(
        b
      )}', function() { a ${arithmetic} b });`
    );
  };
  for (var a in arithmetic) {
    arithmeticSuite(n1, n1, arithmetic[a]);
    arithmeticSuite(n3, n4, arithmetic[a]);
    arithmeticSuite(s1, s2, arithmetic[a]);
    arithmeticSuite(s3, s4, arithmetic[a]);
  }

  var prefixSuite = function(a, ment) {
    var temp = a;
    eval(`suite.add('${ment}${a}', function() { ${ment}temp });`);
  };
  var postfixSuite = function(a, ment) {
    var temp = a;
    eval(`suite.add('${a}${ment}', function() { temp${ment} });`);
  };
  for (var a in ment) {
    prefixSuite(n1, ment[a]);
    postfixSuite(n1, ment[a]);
    prefixSuite(n3, ment[a]);
    postfixSuite(n3, ment[a]);
  }

  var comparasionSuite = function(a, b, comparasion) {
    eval(
      `suite.add('${utils.f(a)} ${comparasion} ${utils.f(
        b
      )}', function() { a ${comparasion} b });`
    );
  };
  for (var a in comparasion) {
    comparasionSuite(n1, n2, comparasion[a]);
    comparasionSuite(n3, n4, comparasion[a]);
    comparasionSuite(s1, s2, comparasion[a]);
    comparasionSuite(s3, s4, comparasion[a]);
    comparasionSuite(n3, s3, comparasion[a]);
  }

  var temp;

  temp = n1;
  suite.add(`${utils.f(n1)} += ${utils.f(n2)}`, function() {
    temp += n2;
  });
  temp = n3;
  suite.add(`${utils.f(n3)} += ${utils.f(n4)}`, function() {
    temp += n4;
  });
  temp = s1;
  suite.add(`${utils.f(s1)} += ${utils.f(s2)}`, function() {
    temp += s2;
  });

  temp = n1;
  suite.add(`${utils.f(n1)} -= ${utils.f(n2)}`, function() {
    temp -= n2;
  });
  temp = n3;
  suite.add(`${utils.f(n3)} -= ${utils.f(n4)}`, function() {
    temp -= n4;
  });

  temp = n1;
  suite.add(`${utils.f(n1)} *= ${utils.f(n2)}`, function() {
    temp *= n2;
  });
  temp = n3;
  suite.add(`${utils.f(n3)} *= ${utils.f(n4)}`, function() {
    temp *= n4;
  });

  temp = n1;
  suite.add(`${utils.f(n1)} /= ${utils.f(n2)}`, function() {
    temp /= n2;
  });
  temp = n3;
  suite.add(`${utils.f(n3)} /= ${utils.f(n4)}`, function() {
    temp /= n4;
  });

  temp = n1;
  suite.add(`${utils.f(n1)} %= ${utils.f(n2)}`, function() {
    temp %= n2;
  });
  temp = n3;
  suite.add(`${utils.f(n3)} %= ${utils.f(n4)}`, function() {
    temp %= n4;
  });

  suite.add('map (1) get 0', function() {
    m1.get(0);
  });
  suite.add('map (1024) get 0', function() {
    m2.get(0);
  });

  suite.add('map (1) set 1', function() {
    m1.set(1, 1);
  });
  suite.add('map (1024) set "test"', function() {
    m2.set(512, 'test');
  });

  suite.add('object (1) get ._0', function() {
    o1._0;
  });
  suite.add('object (1) get ["_0"]', function() {
    o1['_0'];
  });

  suite.add('object (1024) ._543', function() {
    o2._543;
  });
  suite.add('object (1024) ["_543"]', function() {
    o2['_543'];
  });

  suite.add('array (1) [0]', function() {
    a1[0];
  });
  suite.add('array (1024) [543]', function() {
    a2[543];
  });

  suite.add('!true', function() {
    !true;
  });
  suite.add(`!${n3}`, function() {
    !n3;
  });
  suite.add('!string (1024)', function() {
    !s3;
  });
  suite.add('!object (1024)', function() {
    !o2;
  });
  suite.add('!array (1024)', function() {
    !a2;
  });

  (function() {
    var x = {};
    suite.add({
      name: 'a.b = null',
      onCycle: function() {
        x.y = 123;
      },
      fn: function() {
        a.b = null;
      }
    });
  })();

  (function() {
    var x = {};
    suite.add({
      name: 'delete a.b',
      onCycle: function() {
        x.y = 123;
      },
      fn: function() {
        delete a.b;
      }
    });
  })();
};
