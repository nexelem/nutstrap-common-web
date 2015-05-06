describe('DateService Tests', function() {

    beforeEach(module('myApp.common'));

    var DateService;

    beforeEach(inject(function($injector) {
        DateService = $injector.get('DateService');
    }));

    it('Should create date', function() {
        expect(DateService.now()).toBeDefined();
        expect(DateService.now() instanceof Date).toBeTruthy();
    });

});