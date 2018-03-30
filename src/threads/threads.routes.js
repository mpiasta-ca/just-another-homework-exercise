routes.$inject = ['$stateProvider'];

function routes ($stateProvider) {
  $stateProvider.state('threads', {
    url: '/threads',
    template: '<threads></threads>'
  });
}

export default routes;