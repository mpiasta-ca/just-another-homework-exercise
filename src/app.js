//stylesheets
import './assets/css/normalize.css';
import './assets/css/main.css';

//vendor
import angular from 'angular';
import 'angular-route';

//app
import './threads/threads';

(function (ng) {

  ng.module('DeployTool', ['ngRoute', 'DeployTool.Threads'])
    .config(['$routeProvider', configRouteProvider]);

  ////////////

  function configRouteProvider ($routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/threads' });
  }

})(angular);
