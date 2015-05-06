
class EnhanceLog

    enhance: ($log) ->
       $log.getInstance = (context) =>
            log: @enhanceLogging($log.log, context),
            info: @enhanceLogging($log.info, context),
            warn: @enhanceLogging($log.warn, context),
            debug: @enhanceLogging($log.debug, context),
            error: @enhanceLogging($log.error, context)

    enhanceLogging: (loggingFunc, context) ->
        () ->
            modifiedArguments = [].slice.call(arguments);
            modifiedArguments[0] = ["#{new Date().toLocaleTimeString('en-GB')} [#{context}] "] + modifiedArguments[0];
            loggingFunc.apply(null, modifiedArguments);

commonModule.service('EnhanceLog', EnhanceLog)