describe('ConfigService Tests', function() {

    beforeEach(module('myApp.common'));

    var $log, $scope, HttpService, ConfigService;
    var returnPromise;

    beforeEach(inject(function($injector, $rootScope) {
        $log = $injector.get('$log');
        HttpService = $injector.get('HttpService');
        ConfigService = $injector.get('ConfigService');

        returnPromise = $injector.get('$q').defer();

        $scope = $rootScope.$new();

        spyOn(HttpService, 'get').andReturn(returnPromise.promise);
    }));

    afterEach(function (){
        $scope.$apply();
    });

    it('Should load environment configs', function() {
        var configs = [
            {name:'a'},{name:'b'}
        ];
        returnPromise.resolve(configs);
        $scope.$apply();

        var response = ConfigService.lookupEnvironmentConfig();

        expect(HttpService.get).toHaveBeenCalledWith("/environments");
        expect(response).toBeDefined();

        response.then(function(results){
            expect(results).toEqual(configs);
        });
    });

    it('Should handle rejection when loading load environment configs', function() {
        returnPromise.reject("Error!");
        $scope.$apply();

        var response = ConfigService.lookupEnvironmentConfig();

        expect(HttpService.get).toHaveBeenCalledWith("/environments");
        expect(response).toBeDefined();

        response.then(function(results){
            expect(results).toEqual("Error!");
        });
    });

    it('Should load extra types configs', function() {
        var configs = {"extraTypes":[{}, {}]};
        returnPromise.resolve(configs);
        $scope.$apply();

        var response = ConfigService.lookupExtraTypesConfig("233");

        expect(HttpService.get).toHaveBeenCalledWith("/config/extratypes/233");
        expect(response).toBeDefined();

        response.then(function(results){
            expect(results).toEqual([{}, {}]);
        });
    });
});