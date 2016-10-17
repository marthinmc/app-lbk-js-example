define(function(require) {
  var app = require('./ljs.main.module');

  app.config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  function config($stateProvider, $urlRouterProvider) {}
});
