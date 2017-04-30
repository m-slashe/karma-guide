class MainCtrl{

    constructor($scope, $http){

        const main = this;
        $scope.main = main;
        main.$scope = $scope;
        main.$http = $http;
        main.teste = 5;

        main.sendRequest = function(){
            $http.get('/teste')
                .then(function (response) {
                    main.data = response.data;
                })
                .catch(function (err) {
                    main.data = err.data;
                })
        };

        main.seila = function(){
            main.clicado = 'clicado';
        }
    }

}
MainCtrl.$inject = ['$scope', '$http'];
export { MainCtrl };