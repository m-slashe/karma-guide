angular.module('module',['ui.router']);

angular.module('module').config(config);

function config($stateProvider,$urlRouterProvider) {

    $stateProvider
        .state('main',{
            url: '/main',
            controller: 'MainCtrl',
            templateUrl: 'module/template/main.html'
        });

    $urlRouterProvider.otherwise('/main');

}