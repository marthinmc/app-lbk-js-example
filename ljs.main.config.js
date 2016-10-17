define(function(require) {
  var app = require('ljs/ljs.main.module');

  require('architectureService');

  app.run(function(architectureService) {
    architectureService.loadProperties('ljs');
  });
});
