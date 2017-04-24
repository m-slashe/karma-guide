describe('Controller Main Teste',function () {

    var scope, controller, httpMock, requestHandler;

    beforeEach(module('module'));

    beforeEach(inject(function ($rootScope, $controller, $httpBackend) {
        scope = $rootScope.$new();
        httpMock = $httpBackend;
        requestHandler = httpMock
            .when('GET','/teste')
            .respond(200, { foo: 'bar' });
        $httpBackend.whenGET(/\.html$/).respond('');
        controller = $controller('MainCtrl', {
            '$scope': scope
        });

    }));

    it('teste com request sucesso',function () {
        scope.sendRequest();
        expect(httpMock.flush).not.toThrow();
        expect(scope.data).toBe('bar');
    });

    it('teste com request erro',function () {
        requestHandler.respond(500);
        scope.sendRequest();
        expect(httpMock.flush).not.toThrow();
        expect(scope.data).toBe('erro');
    });

    it('clicar no botão',function () {
        scope.seila();
        expect(scope.clicado).toBe('clicado');
    });

    it('$scope disponivel',function () {
        expect(scope).toBeDefined()
    });

    it('$scope.teste deve ser 5',function () {
        expect(scope.teste).toBe(5);
    })
});