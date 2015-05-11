###
    Config I18N library
###
commonModule.value('ngI18nConfig', {
    defaultLocale: 'en',
    supportedLocales: ['en'],
    basePath: 'assets/i18n',
    cache: true
})

###
    Provides a set of key mappings for group resources
###
commonModule.value('i18nGroupData', [
    ["unknown-value", "operation_result_keys"],
    ["unknown-value", "confirmation_status"]
])

commonModule.constant('RegExPatterns', {
    numericOnly:  "/^[0-9]+$/",
    decimalType:  "/^[0-9]+(.[0-9]+)?$/",
    decimalType2dp: "/^[0-9]+(.[0-9][0-9]?)?$/",
    phoneNumber: "/^[0]([0-9][ ]*){10,}$/"
})

commonModule.constant('UserConfig', {
  API_CREATE_USER: "/user/create",
  API_UPDATE_USER: "/user/update",
  API_RESET_PASSWORD: '/user/password/reset',
  API_VALIDATE_USERNAME: '/user/username/validate/{username}',
  API_LIST_EXTERNAL_USER_GROUPS: "/user/external/groups",
  API_DELETE_EXTERNAL_USER_GROUPS: "/user/external/group/{groupId}",
  API_AUTHENTICATED: "/authenticated",
  API_LOGIN: "/login",
  API_LOGOUT: "/logout"
})
