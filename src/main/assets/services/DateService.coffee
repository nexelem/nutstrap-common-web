
class DateService

    constructor: () ->

    now: () ->
        new Date()

commonModule.service('DateService', DateService)