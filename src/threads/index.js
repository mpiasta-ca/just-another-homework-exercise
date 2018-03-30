
//vendor
import angular from 'angular';
import uirouter from '@uirouter/angularjs';

//app
import routes from './threads.routes';
import threadsTemplate from './threads.html';
import ThreadsController from './threads.controller';

export default angular.module('DeployTool.Threads', [uirouter])
  .config(routes)
  .component('threads', {
    template: threadsTemplate,
    controller: ThreadsController
  })
  .name;