define(['./config/ljs.common.cfg',
'./config/config-env/ljs.env.cfg'], function(common, env) {
  return angular.module('ljs', ['ui.router', 'ui.bootstrap', 'ngAnimate', 'lqv'])
    .run(function(architectureService) {
      architectureService.loadProperties(common, env);
    });
});
