define(['./ljs.main.module',
  './ljs.main.routes',
  './ljs.main.component',
  './ljs.constants',
], function() {
  var $html = angular.element(document.getElementById('ljs'));

  angular.element($html).ready(function() {
    // bootstrap the app manually
    angular.bootstrap($html, ['ljs']);
  });
});
