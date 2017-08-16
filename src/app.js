'use strict';

(function (ng) {

  ng.module('DeployTool', ['ngRoute', 'DeployTool.Threads'])
    .config(['$routeProvider', configRouteProvider]);

  ////////////

  function configRouteProvider ($routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/threads' });
  }

})(angular);
