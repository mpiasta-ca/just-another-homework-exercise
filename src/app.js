//stylesheets
import './assets/css/normalize.css';
import './assets/css/main.css';

//vendor
import angular from 'angular';
import uirouter from '@uirouter/angularjs';

//app
import routes from './app.routes';
import threads from './threads';

angular.module('DeployTool', [uirouter, threads])
  .config(routes);
