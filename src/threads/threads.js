//template
import threadsTemplate from './threads.html';

//vendor
import angular from 'angular';

(function (ng) {

  ng.module('DeployTool.Threads', ['ngRoute'])
    .config(['$routeProvider', configRouteProvider])
    .component('threads', {
      template: threadsTemplate,
      controller: threadsController
    });

  ////////////

  function configRouteProvider ($routeProvider) {
    $routeProvider.when('/threads', {template: '<threads></threads>'});
  }

  function threadsController () {
    getThreads.call(this);

    ////

    function getThreads () {
      threadsService().get().then(threads => {
        this.threads = new Threads(threads);
        this.loaded = true;
      });
    }

    function threadsService () {
      return {
        get: () => {
          let $injector = ng.element(document.body).injector();
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

  class Threads {
    constructor (threads) {
      this.list = threads.map(thread => new Thread(this, thread));
      this.toggleDirection = 'expand';
    }

    updateToggleDirection () {
      let expandedThreads = 0;
      this.list.forEach(thread => {
        expandedThreads += thread.isExpanded ? 1 : 0;
      });
      this.toggleDirection = expandedThreads < this.list.length ? 'expand' : 'collapse';
    };

    toggleAll () {
      this.list.forEach(thread => {
        thread.toggle(this.toggleDirection === 'expand');
      });
      this.updateToggleDirection();
    };
  }

  class Thread {
    constructor (parent, thread) {
      this.parent = parent;
      this.name = thread.name || 'Thread';
      this.crashed = thread.crashed || false;
      this.stackTrace = thread.stackTrace.map(trace => new Trace(trace));
      this.isExpanded = false;
    }

    toggle (toggleState) {
      let parentSetState = typeof toggleState === 'boolean';
      this.isExpanded = parentSetState ? toggleState : !this.isExpanded;
      if (!parentSetState) this.parent.updateToggleDirection();
    }
  }

  class Trace {
    constructor (trace) {
      this.module = 'Unknown';
      this.location = 'Unknown';
      this.file = null;
      this.line = null;
      this.codeSnippet = null;
      this.isExpanded = false;

      Object.assign(this, trace);
    }

    toggle () {
      this.isExpanded = !this.isExpanded;
    }
  }
})(angular);
