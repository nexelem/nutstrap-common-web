describe('HttpService Spec Tests', function() {

    beforeEach(module('myApp.common'));

    // Run test
    describe('HttpService functionality tests', function(){

        var $log, $q, $httpBackend, HttpService;

        beforeEach(inject(function($injector) {
            $log = $injector.get('$log');
            $q = $injector.get('$q');
            $httpBackend = $injector.get('$httpBackend');
            HttpService = $injector.get('HttpService');
        }));

        afterEach(function() {
             $httpBackend.verifyNoOutstandingExpectation();
             $httpBackend.verifyNoOutstandingRequest();
             $log.reset();
        });

        it('Should successfully make GET request', function() {
            $httpBackend.expectGET('/some/endpoint').respond(200, {_id: 1234});

            var promise = HttpService.get('/some/endpoint');
            $httpBackend.flush();

            expect(promise).toBeDefined();
            expect($log.info.logs[0][0]).toEqual("Successful GET request to [/some/endpoint] - status [200]");
        });

        it('Should handle unsuccessful GET request', function() {
            $httpBackend.expectGET('/some/endpoint').respond(404);

            var promise = HttpService.get('/some/endpoint');
            $httpBackend.flush();

            expect(promise).toBeDefined();
            expect($log.error.logs[0][0]).toEqual("Failed GET request to [/some/endpoint] - status [404]");
        });

        it('Should successfully make POST request', function() {

            var responseObj = {name: 'Test Brand', _id: 'aabb'}
            $httpBackend.expectPOST('/some/endpoint', {obj:"value"}).respond(200, responseObj);

            var promise = HttpService.post('/some/endpoint', {obj:"value"});
            $httpBackend.flush();

            expect(promise).toBeDefined();
            expect($log.info.logs[0][0]).toEqual("Successful POST request to [/some/endpoint] - status [200]");
        });

        it('Should handle unsuccessful POST request', function() {
            $httpBackend.expectPOST('/some/endpoint', {obj:"value"}).respond(404);

            var promise = HttpService.post('/some/endpoint', {obj:"value"});
            $httpBackend.flush();

            expect(promise).toBeDefined();
            expect($log.error.logs[0][0]).toEqual("Failed POST request to [/some/endpoint] - status [404]");
        });

        it('Should successfully make PUT request', function() {

            var responseObj = {name: 'Test Brand', _id: 'aabb'}
            $httpBackend.expectPUT('/some/endpoint', {obj:"value"}).respond(200, responseObj);

            var promise = HttpService.put('/some/endpoint', {obj:"value"});
            $httpBackend.flush();

            expect(promise).toBeDefined();
            expect($log.info.logs[0][0]).toEqual("Successful PUT request to [/some/endpoint] - status [200]");
        });

        it('Should handle unsuccessful PUT request', function() {
            $httpBackend.expectPUT('/some/endpoint', {obj:"value"}).respond(404);

            var promise = HttpService.put('/some/endpoint', {obj:"value"});
            $httpBackend.flush();

            expect(promise).toBeDefined();
            expect($log.error.logs[0][0]).toEqual("Failed PUT request to [/some/endpoint] - status [404]");
        });

        it('Should successfully make DELETE request', function() {

            var responseObj = {name: 'Test Brand', _id: 'aabb'}
            $httpBackend.expectDELETE('/some/endpoint').respond(200, responseObj);

            var promise = HttpService.delete('/some/endpoint');
            $httpBackend.flush();

            expect(promise).toBeDefined();
            expect($log.info.logs[0][0]).toEqual("Successful DELETE request to [/some/endpoint] - status [200]");
        });

        it('Should handle unsuccessful DELETE request', function() {
            $httpBackend.expectDELETE('/some/endpoint').respond(404);

            var promise = HttpService.delete('/some/endpoint');
            $httpBackend.flush();

            expect(promise).toBeDefined();
            expect($log.error.logs[0][0]).toEqual("Failed DELETE request to [/some/endpoint] - status [404]");
        });
    });
});