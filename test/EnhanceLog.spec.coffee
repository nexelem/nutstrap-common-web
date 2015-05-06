describe 'Enhance log', () ->

    beforeEach(module('myApp.common'));

    EnhanceLog = null

    $log = {
        info: () ->
        warn: () ->
        debug: () ->
        error: () ->
    }

    beforeEach(inject(($injector) ->
        EnhanceLog = $injector.get('EnhanceLog')
        spyOn($log, 'info').andCallThrough()
    ))

    it 'enhance log string', () ->
        EnhanceLog.enhance($log)

        $log = $log.getInstance("jasmine test log")
        $log.info("info message")

        #expect($log.info).toHaveBeenCalledWith("info message");

