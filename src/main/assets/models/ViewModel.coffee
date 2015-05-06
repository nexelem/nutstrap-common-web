
class ViewModel

    constructor: ($log, @$location, TaskableViewsConfig) ->
        @$log = $log.getInstance 'ViewModel'
        @$log.debug "constructing"
        @currentView = ""
        @TASKABLE_VIEWS = TaskableViewsConfig

    changePartial: (name) ->
        @$log.debug "changing current view : [#{name}]"
        @currentView = name
        @$location.hash("")

    resetView: (name) ->
        @changePartial(name)

    navigateToSubViewOrReset: (name) ->
        if @sub_view then @changePartial(@sub_view) else @resetView(name)
        @sub_view = ''

    changeSubViewPartial: (@sub_view) ->

    isTaskableView: () ->
        @TASKABLE_VIEWS.indexOf(@currentView) != -1

commonModule.factory 'ViewModel', ($log, $location, TaskableViewsConfig) -> new ViewModel($log, $location, TaskableViewsConfig)