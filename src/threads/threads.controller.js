//vendor
import angular from 'angular';

//app
import { Threads } from './threads.classes';

class ThreadsController {
  constructor () {
    this.getThreads();
  }

  getThreads () {
    this.threadsService().get().then(threads => {
      this.threads = new Threads(threads);
      this.loaded = true;
    });
  }

  threadsService () {
    return {
      get: () => {
        let $injector = angular.element(document.body).injector();
        let $timeout = $injector.get('$timeout');
        let $http = $injector.get('$http');
        let mockDelayInMs = 2000;

        return $timeout(() => {
          return $http.get('./threads/mock.json').then(response => {
            return response.data || [];
          });
        }, mockDelayInMs);
      }
    };
  }
}

export default ThreadsController;