routes.$inject = ['$urlRouterProvider'];

function routes ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/threads');
}

export default routes;