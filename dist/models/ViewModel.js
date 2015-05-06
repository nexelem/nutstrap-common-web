(function(){var ViewModel;ViewModel=function(){function ViewModel($log,$location1,TaskableViewsConfig){this.$location=$location1,this.$log=$log.getInstance("ViewModel"),this.$log.debug("constructing"),this.currentView="",this.TASKABLE_VIEWS=TaskableViewsConfig}return ViewModel.prototype.changePartial=function(name){return this.$log.debug("changing current view : ["+name+"]"),this.currentView=name,this.$location.hash("")},ViewModel.prototype.resetView=function(name){return this.changePartial(name)},ViewModel.prototype.navigateToSubViewOrReset=function(name){return this.sub_view?this.changePartial(this.sub_view):this.resetView(name),this.sub_view=""},ViewModel.prototype.changeSubViewPartial=function(sub_view){this.sub_view=sub_view},ViewModel.prototype.isTaskableView=function(){return-1!==this.TASKABLE_VIEWS.indexOf(this.currentView)},ViewModel}(),commonModule.factory("ViewModel",function($log,$location,TaskableViewsConfig){return new ViewModel($log,$location,TaskableViewsConfig)})}).call(this);