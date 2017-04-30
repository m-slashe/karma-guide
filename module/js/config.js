function config($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('main',{
            url: '/',
            controller: 'MainCtrl',
            controllerAs: 'main',
            templateUrl: 'template/main.html'
        });

    $urlRouterProvider.otherwise('/');

}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };