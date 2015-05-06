
class ConfigService

    constructor: (@$q, @HttpService) ->

    lookupEnvironmentConfig: () ->
        deferred = @$q.defer()
        @HttpService.get("/environments")
            .then(
                (data) =>
                    deferred.resolve(data)
                ,(error) =>
                    deferred.reject(error)
            )
        deferred.promise

    lookupFilterConfig: (channelId) ->
        deferred = @$q.defer()
        @HttpService.get("/config/filterfails/"+channelId)
            .then(
                (data) =>
                    deferred.resolve(data.asMap)
                ,(error) =>
                    deferred.reject(error)
            )
        deferred.promise

    lookupExtraTypesConfig: (channelId) ->
        deferred = @$q.defer()
        @HttpService.get("/config/extratypes/"+channelId)
            .then(
                (data) =>
                    deferred.resolve(data.extraTypes)
                ,(error) =>
                    deferred.reject(error)
            )
        deferred.promise

commonModule.service('ConfigService', ConfigService)
