'use strict';

(function (ng) {

  ng.module('DeployTool.Threads', ['ngRoute'])
    .config(['$routeProvider', configRouteProvider])
    .component('threads', {
      templateUrl: './threads/threads.html',
      controller: threadsController
    });

  ////////////

  function configRouteProvider ($routeProvider) {
    $routeProvider.when('/threads', {template: '<threads></threads>'});
  }

  function threadsController () {
    var store = this;
    getThreads();

    ////////////

    function getThreads () {
      threadsApiService().get().then(function (threads) {
        store.threads = new Threads(threads);
        store.loaded = true;
      });
    }
  }

  function threadsApiService () {
    var $injector = ng.element(document.body).injector();
    var $timeout = $injector.get('$timeout');
    var $http = $injector.get('$http');

    return {
      get: function () {
        var mockDelayInMs = 2000;

        return $timeout(function makeHttpCall() {
          return $http.get('./threads/mock.json').then(function (response) {
            return response.data || [];
          });
        }, mockDelayInMs);
      }
    };
  }

  function Threads (threads) {
    var self = this;

    self.list = threads.map(function (thread) {
      return new Thread(self, thread);
    });

    self.toggleDirection = 'expand';

    self.updateToggleDirection = function () {
      var expandedThreads = 0;
      self.list.forEach(function (thread) {
        expandedThreads += thread.isExpanded ? 1 : 0;
      });
      self.toggleDirection = expandedThreads < self.list.length ? 'expand' : 'collapse';
    };

    self.toggleAll = function () {
      self.list.forEach(function (thread) {
        thread.toggle(self.toggleDirection === 'expand');
      });
      self.updateToggleDirection();
    };
  }

  function Thread (parent, thread) {
    var self = this;

    self.name = thread.name || 'Thread';
    self.crashed = thread.crashed || false;
    self.stackTrace = thread.stackTrace.map(function (trace) {
      return new Trace(trace);
    });

    self.isExpanded = false;

    self.toggle = function (toggleState) {
      var parentSetState = typeof toggleState === 'boolean';
      self.isExpanded = parentSetState ? toggleState : !self.isExpanded;
      if (!parentSetState) parent.updateToggleDirection();
    };
  }

  function Trace (trace) {
    this.module = 'Unknown';
    this.location = 'Unknown';
    this.file = null;
    this.line = null;
    this.codeSnippet = null;

    this.isExpanded = false;

    this.toggle = function () {
      this.isExpanded = !this.isExpanded;
    };

    Object.assign(this, trace);
  }
})(angular);
