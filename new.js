module.exports = function(suite) {
  var temp;

  suite.add('create undefined', function() {
    temp = undefined;
  });
  suite.add('create null', function() {
    temp = null;
  });
  suite.add('create Symbol()', function() {
    temp = Symbol();
  });
  suite.add('new Map()', function() {
    temp = new Map();
  });
  suite.add('create function () {}', function() {
    temp = function() {};
  });
  suite.add('function (1,2,3)', function() {
    temp(1, 2, 3);
  });
  suite.add('function .call(this, 1,2,3)', function() {
    temp.call(this, 1, 2, 3);
  });
  suite.add('function .apply(this, [1,2,3])', function() {
    temp.apply(this, [1, 2, 3]);
  });
  suite.add('create class', function() {
    temp = class {};
  });
  class Parent {}
  suite.add('create class extends', function() {
    temp = class extends Parent {};
  });
  suite.add('create 1', function() {
    temp = 1;
  });
  suite.add('create 432432574374542', function() {
    temp = 432432574374542;
  });
  suite.add('create string (1)', function() {
    temp = 'a';
  });
  suite.add('create string (6979)', function() {
    temp = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis dolor vitae neque bibendum posuere. Aliquam interdum elit nec eros venenatis, vitae ornare dolor convallis. Praesent commodo iaculis velit in vehicula. Sed vehicula libero lacus, quis vulputate ligula suscipit viverra. Aenean in aliquet elit, in placerat magna. Donec rhoncus ipsum vitae felis egestas blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ac massa non urna iaculis faucibus.Mauris pulvinar dui in vulputate mollis. Duis dapibus, sapien nec gravida auctor, nibh enim egestas justo, ac ultricies turpis odio sed erat. Fusce mauris sem, euismod quis lobortis nec, accumsan sed ante. Vestibulum mollis eget elit non pellentesque. Donec facilisis neque vel ante porta ultrices. Quisque malesuada quis dui vel suscipit. Suspendisse potenti. Vivamus malesuada at dolor et ornare. Quisque placerat consequat leo, ac dapibus dolor porttitor et. Curabitur ut pharetra massa. Integer aliquam metus odio, in aliquet risus elementum in. Ut accumsan felis at dui rutrum, eu luctus justo condimentum. Etiam mattis sapien sit amet leo eleifend euismod. Pellentesque sed neque auctor, imperdiet leo a, ultricies arcu. In hac habitasse platea dictumst. Maecenas eu egestas magna.In lacinia nibh quis ipsum finibus, eu feugiat eros finibus. Praesent nec purus eget libero pellentesque pretium sed sit amet nulla. Donec gravida ut ex a imperdiet. Nulla facilisi. Curabitur ornare felis enim, ut lacinia turpis scelerisque sit amet. Duis rhoncus augue arcu, mattis auctor sem accumsan id. Ut suscipit erat vel purus consectetur commodo. Praesent finibus rhoncus odio ut egestas. Phasellus hendrerit ex lectus, nec condimentum elit dapibus eu. Proin vel nibh a tortor pellentesque efficitur ac vitae ante. Nunc ornare eu erat a feugiat. Curabitur non mi lacinia, tincidunt metus fringilla, egestas tellus. Pellentesque bibendum erat ut gravida sagittis. Fusce quis urna maximus, egestas augue sed, finibus sem. Duis sit amet lacus quis metus condimentum mattis.Nunc nec pulvinar risus. Ut ac turpis pulvinar, vulputate urna ultricies, pellentesque nisl. Vestibulum nunc tortor, dictum et blandit sit amet, egestas at est. Nulla tristique sollicitudin augue, ut tincidunt sapien finibus lacinia. Nam lacus risus, hendrerit sit amet imperdiet sit amet, aliquet sed sapien. Vivamus condimentum ante non feugiat rhoncus. Suspendisse sollicitudin, elit sit amet dapibus pretium, neque purus lacinia arcu, ut dignissim urna elit vel nibh. Etiam faucibus arcu a lorem varius, at consectetur tellus elementum. Fusce ac nulla sit amet massa rhoncus dignissim vel eget sapien. Nam convallis nisi diam, sed facilisis turpis dignissim in. Fusce euismod quam vel diam viverra molestie. Maecenas nec nunc tempus, vestibulum risus sed, eleifend lorem. Quisque malesuada varius sapien, eu ornare erat pellentesque quis. Integer nec ipsum dui. Suspendisse potenti. Fusce nulla turpis, sodales condimentum tincidunt non, feugiat eget eros.Sed sodales condimentum arcu, tempus laoreet ante aliquam eget. Pellentesque sed nisi risus. Integer euismod bibendum enim, in gravida nunc vehicula nec. Curabitur vestibulum iaculis augue, ac viverra tortor efficitur sit amet. Aliquam pretium nisi velit. Cras tempus velit eget lacus aliquam, non laoreet diam iaculis. Proin tincidunt in sapien eu rhoncus. Donec vel pellentesque arcu. Mauris non eleifend odio, vitae viverra neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam velit ligula, maximus vitae porttitor sed, mollis eget nisl. Duis tincidunt, magna at faucibus fermentum, lorem erat efficitur risus, ut vehicula urna lacus a ipsum. Quisque sollicitudin, ante ac tristique pulvinar, enim mauris pharetra urna, sed posuere turpis diam aliquam felis.Proin vulputate quam porttitor lectus semper sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque tristique leo sed arcu luctus eleifend. Praesent dignissim lectus id libero suscipit pulvinar. Suspendisse fringilla aliquet ligula fringilla maximus. Sed eleifend urna in odio condimentum mattis. Phasellus in imperdiet erat. Nulla et libero eget massa suscipit egestas et a elit. Vestibulum malesuada a tellus at feugiat. Fusce vitae ornare libero. Aenean ac ultricies orci, ut pretium lectus. Suspendisse nec turpis iaculis, consectetur arcu ac, interdum velit. Curabitur eget dolor tempus tortor aliquam eleifend nec id lectus. In imperdiet ante in ullamcorper porta. Proin orci ante, commodo vitae mauris sed, porttitor sodales purus. Nam risus lorem, varius at fermentum eu, pellentesque ac quam.Donec aliquam lectus turpis, sed mollis nulla iaculis luctus. Donec aliquet malesuada metus vel semper. Integer erat ex, posuere eu suscipit pretium, pharetra in magna. Donec at neque faucibus, finibus orci in, aliquam dolor. Aliquam vel lobortis risus. Suspendisse laoreet mi ut iaculis suscipit. Morbi ac magna tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean eget ante auctor, dictum tortor eget, euismod ante. Sed augue ante, efficitur ut feugiat at, aliquam et nisl. Phasellus finibus nisl at nunc bibendum, in vehicula nunc porttitor. Donec finibus tempus enim vel tempor. Fusce feugiat diam ex, ac pharetra quam tincidunt vel. Nam interdum volutpat felis.Pellentesque aliquam mauris nec est commodo, a posuere magna fringilla. Donec vehicula cursus nunc id posuere. Donec sodales, purus vel accumsan hendrerit, libero nisl laoreet ante, at rutrum ante risus id felis. Sed eu consectetur urna. Quisque porta, turpis quis vulputate euismod, dui est tincidunt nibh, imperdiet maximus est libero cursus felis. Proin ultricies vitae arcu sed maximus. Pellentesque nec pulvinar metus, quis egestas orci. Nulla id tempus urna. Etiam finibus et ex et fermentum. Proin feugiat tortor neque, et aliquam felis egestas hendrerit.Aenean sodales dignissim semper. Curabitur vitae sagittis mauris. Fusce nec arcu dapibus, vehicula lorem eu, ultrices risus. Nulla pharetra magna sed mattis tempus. Quisque feugiat ante a libero pellentesque pellentesque. Donec volutpat arcu ut efficitur blandit. Fusce tincidunt turpis vel elit mollis consectetur. Donec sagittis scelerisque nunc, at mollis ante tincidunt in.In nec risus convallis, feugiat massa ultrices, egestas enim. Quisque a lorem tellus. Donec leo nunc, placerat vel auctor vitae, dapibus nec purus. Sed tristique odio vitae magna eleifend efficitur. Donec dignissim orci eu sapien finibus, ac pretium augue consectetur. Sed elementum quis felis in accumsan. Curabitur mollis euismod sollicitudin. Suspendisse vitae felis maximus, gravida odio sit amet, blandit libero. Aenean at nunc ex. Vestibulum tellus orci, consectetur quis pharetra consectetur, interdum blandit lectus. Integer rhoncus leo et facilisis mattis. Vivamus in sagittis sapien. Duis posuere ornare arcu. Nunc at eleifend tortor.`;
  });
  suite.add('create empty array', function() {
    temp = [];
  });
  suite.add('new Array()', function() {
    temp = new Array();
  });
  suite.add('create {}', function() {
    temp = {};
  });
  suite.add('create {} with key', function() {
    temp = { key: 'value' };
  });
  suite.add('new Object()', function() {
    temp = new Object();
  });
};
