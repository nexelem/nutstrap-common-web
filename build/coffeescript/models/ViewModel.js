// Generated by CoffeeScript 1.8.0
(function() {
  var ViewModel;

  ViewModel = (function() {
    function ViewModel($log, $location, TaskableViewsConfig) {
      this.$log = $log;
      this.$location = $location;
      this.$log = $log.getInstance('ViewModel');
      this.$log.debug("constructing");
      this.currentView = "";
      this.TASKABLE_VIEWS = TaskableViewsConfig;
    }

    ViewModel.prototype.changePartial = function(name) {
      this.$log.debug("changing current view : [" + name + "]");
      this.currentView = name;
      return this.$location.hash("");
    };

    ViewModel.prototype.resetView = function(name) {
      return this.changePartial(name);
    };

    ViewModel.prototype.navigateToSubViewOrReset = function(name) {
      if (this.sub_view) {
        this.changePartial(this.sub_view);
      } else {
        this.resetView(name);
      }
      return this.sub_view = '';
    };

    ViewModel.prototype.changeSubViewPartial = function(sub_view) {
      this.sub_view = sub_view;
    };

    ViewModel.prototype.isTaskableView = function() {
      return this.TASKABLE_VIEWS.indexOf(this.currentView) !== -1;
    };

    return ViewModel;

  })();

  commonModule.factory('ViewModel', function($log, $location, TaskableViewsConfig) {
    return new ViewModel($log, $location, TaskableViewsConfig);
  });

}).call(this);