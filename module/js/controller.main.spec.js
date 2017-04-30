describe('Controller Main Teste',function () {

    var scope, controller, httpMock, requestHandler;

    beforeEach(angular.mock.module('module'));

    beforeEach(inject(function ($rootScope, $controller, $httpBackend) {
        scope = $rootScope.$new();
        httpMock = $httpBackend;
        requestHandler = httpMock
            .when('GET','/teste')
            .respond(200, 'bar');
        $httpBackend.whenGET(/\.html$/).respond('');
        controller = $controller('MainCtrl', {
            '$scope': scope
        });

    }));

    it('teste com request sucesso',function () {
        scope.main.sendRequest();
        expect(httpMock.flush).not.toThrow();
        expect(scope.main.data).toBe('bar');
    });

    it('teste com request erro',function () {
        requestHandler.respond(500, 'erro');
        scope.main.sendRequest();
        expect(httpMock.flush).not.toThrow();
        expect(scope.main.data).toBe('erro');
    });

    it('clicar no botão',function () {
        scope.main.seila();
        expect(scope.main.clicado).toBe('clicado');
    });

    it('$scope disponivel',function () {
        expect(scope).toBeDefined()
    });

    it('$scope.teste deve ser 5',function () {
        expect(scope.main.teste).toBe(5);
    });

    it('test editado',function () {
        expect(1).toBe(1);
    })
});