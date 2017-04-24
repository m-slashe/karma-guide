angular.module('module').controller('MainCtrl',MainCtrl);

MainCtrl.$inject = ['$scope','$http'];
function MainCtrl($scope, $http) {

    $scope.sendRequest = function () {
        $http.get('/teste')
            .success(function (data) {
                $scope.data = data.foo;
            })
            .error(function () {
                $scope.data = 'erro';
            })
    };

    $scope.seila = function () {
        $scope.clicado = 'clicado';
    };

    $scope.teste = 5
}