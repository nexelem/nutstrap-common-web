
class HttpService

    constructor: (@$log, @$http, @$q) ->
        @$log.debug "constructing HttpService"

    get:(endpoint) ->
        deferred = @$q.defer()
        @$http.get(endpoint)
            .success((data, status, headers) =>
                @$log.info("Successful GET request to [#{endpoint}] - status [#{status}]")
                deferred.resolve(data)
            )
            .error((data, status, headers) =>
                @$log.error("Failed GET request to [#{endpoint}] - status [#{status}]")
                deferred.reject(data)
            )
        deferred.promise


    post:(endpoint, payload) ->
        deferred = @$q.defer()
        @$http.post(endpoint, payload)
            .success((data, status, headers) =>
                @$log.info("Successful POST request to [#{endpoint}] - status [#{status}]")
                deferred.resolve(data)
            )
            .error((data, status, headers) =>
                @$log.error("Failed POST request to [#{endpoint}] - status [#{status}]")
                deferred.reject(data);
            )
        deferred.promise


    put:(endpoint, payload) ->
        deferred = @$q.defer()
        @$http.put(endpoint, payload)
            .success((data, status, headers) =>
                @$log.info("Successful PUT request to [#{endpoint}] - status [#{status}]")
                deferred.resolve(data)
            )
            .error((data, status, headers) =>
                @$log.error("Failed PUT request to [#{endpoint}] - status [#{status}]")
                deferred.reject(data);
            )
        deferred.promise


    delete:(endpoint) ->
        deferred = @$q.defer()
        @$http.delete(endpoint)
            .success((data, status, headers) =>
                @$log.info("Successful DELETE request to [#{endpoint}] - status [#{status}]")
                deferred.resolve(data)
            )
            .error((data, status, headers) =>
                @$log.error("Failed DELETE request to [#{endpoint}] - status [#{status}]")
                deferred.reject(data);
            )
        deferred.promise

commonModule.service('HttpService', HttpService)