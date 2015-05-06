// Generated by CoffeeScript 1.8.0
(function() {
  var HttpService;

  HttpService = (function() {
    function HttpService($log, $http, $q) {
      this.$log = $log;
      this.$http = $http;
      this.$q = $q;
      this.$log.debug("constructing HttpService");
    }

    HttpService.prototype.get = function(endpoint) {
      var deferred;
      deferred = this.$q.defer();
      this.$http.get(endpoint).success((function(_this) {
        return function(data, status, headers) {
          _this.$log.info("Successful GET request to [" + endpoint + "] - status [" + status + "]");
          return deferred.resolve(data);
        };
      })(this)).error((function(_this) {
        return function(data, status, headers) {
          _this.$log.error("Failed GET request to [" + endpoint + "] - status [" + status + "]");
          return deferred.reject(data);
        };
      })(this));
      return deferred.promise;
    };

    HttpService.prototype.post = function(endpoint, payload) {
      var deferred;
      deferred = this.$q.defer();
      this.$http.post(endpoint, payload).success((function(_this) {
        return function(data, status, headers) {
          _this.$log.info("Successful POST request to [" + endpoint + "] - status [" + status + "]");
          return deferred.resolve(data);
        };
      })(this)).error((function(_this) {
        return function(data, status, headers) {
          _this.$log.error("Failed POST request to [" + endpoint + "] - status [" + status + "]");
          return deferred.reject(data);
        };
      })(this));
      return deferred.promise;
    };

    HttpService.prototype.put = function(endpoint, payload) {
      var deferred;
      deferred = this.$q.defer();
      this.$http.put(endpoint, payload).success((function(_this) {
        return function(data, status, headers) {
          _this.$log.info("Successful PUT request to [" + endpoint + "] - status [" + status + "]");
          return deferred.resolve(data);
        };
      })(this)).error((function(_this) {
        return function(data, status, headers) {
          _this.$log.error("Failed PUT request to [" + endpoint + "] - status [" + status + "]");
          return deferred.reject(data);
        };
      })(this));
      return deferred.promise;
    };

    HttpService.prototype["delete"] = function(endpoint) {
      var deferred;
      deferred = this.$q.defer();
      this.$http["delete"](endpoint).success((function(_this) {
        return function(data, status, headers) {
          _this.$log.info("Successful DELETE request to [" + endpoint + "] - status [" + status + "]");
          return deferred.resolve(data);
        };
      })(this)).error((function(_this) {
        return function(data, status, headers) {
          _this.$log.error("Failed DELETE request to [" + endpoint + "] - status [" + status + "]");
          return deferred.reject(data);
        };
      })(this));
      return deferred.promise;
    };

    return HttpService;

  })();

  commonModule.service('HttpService', HttpService);

}).call(this);