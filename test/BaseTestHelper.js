this.commonModule = angular.module('myApp.common', []);
// Mock I18nResourceService
beforeEach(module(function ($provide){
    $provide.factory('I18nResourceService', function (){
        return {
            getMapForKey: function (key){
                return {
                    'form_validation_error_url': 'Invalid URL',
                    'flash_success': 'Success',
                    'flash_error': 'Error occurred' }
            }.travis.yml.travis.yml
        };
    });
}));

// Mock $dialog
beforeEach(module(function ($provide){
    $provide.factory('$dialog', function (){
        return {
            prompt: function (title, msg){
                return true;
            }
        };
    });

    $provide.decorator('$log', function ($delegate) {
        $delegate.getInstance = function (ctx) {
            return $delegate;
        }
        return $delegate;
    });
}));