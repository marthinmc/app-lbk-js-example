define(function(require) {
  var app = require('./ljs.main.module');

  app.component('ljsMain', {
    templateUrl: '/ljs/ljs.main.index.html',
    controller: MainController,
  });

  MainController.$inject = [];

  function MainController() {}
});
