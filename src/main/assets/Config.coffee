

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

###
    Used to drive entity to sub entity mappings to views
###
commonModule.constant('TaskEntityViewMapping', [
    # Brand Mappings
    {entity: "brand",                  parent_view: "brand",    sub_view: "brand-view",                            entity_association_api: "brand"},
    {entity: "brand_extra",            parent_view: "brand",    sub_view: "extras/extra-manage",                   entity_association_api: "brand/extra"},
    {entity: "brand_rating",           parent_view: "brand",    sub_view: "ratings/rating-manage",                 entity_association_api: "brand/rating"},
    {entity: "brand_filter_fail",      parent_view: "brand",    sub_view: "filterfails/filterfail-manage",         entity_association_api: "brand/filter"},
    {entity: "brand_offer",            parent_view: "brand",    sub_view: "offers/offer-manage",                   entity_association_api: "brand/offer"},
    {entity: "brand_extended_config",  parent_view: "brand",    sub_view: "extendedconfig/extendedconfig-manage",  entity_association_api: "brand/config"},
    # Provider Mappings
    {entity: "provider",               parent_view: "provider", sub_view: "provider-view",                         entity_association_api: "provider"},
    {entity: "translation_entry",      parent_view: "provider", sub_view: "translation/translation-manage",        entity_association_api: "provider/translation"}
])

commonModule.constant('TaskStatus', {
    OPEN: "OPEN",
    DISCARDED: "DISCARDED",
    AWAITING_APPROVAL: "AWAITING_APPROVAL",
    READY_FOR_LIVE: "READY_FOR_LIVE",
    COMPLETE: "COMPLETE"
})

###
    Used to determine which entity views are taskable
###
commonModule.constant('TaskableViewsConfig',[
    ## Brand
    "brand-view", "brand-update",
    "extras/extra-manage",
    "ratings/rating-manage",
    "filterfails/filterfail-manage",
    "offers/offer-manage",
    "extendedconfig/extendedconfig-manage",
    ## Provider
    "provider-view", "provider-update",
    "translation/translation-manage",
    "tsmEntity-view","tsmEntity-update"
])

###
    Defines configuration for the user/authentication module
###
commonModule.constant('UserConfig', {
    # User Service API
    API_CREATE_USER: "/user/create",
    API_UPDATE_USER: "/user/update",
    API_RESET_PASSWORD: '/user/password/reset',
    API_VALIDATE_USERNAME: '/user/username/validate/{username}'
    # External User Groups Service API
    API_LIST_EXTERNAL_USER_GROUPS: "/user/external/groups",
    API_DELETE_EXTERNAL_USER_GROUPS: "/user/external/group/{groupId}",
    # AUTH Service API
    API_AUTHENTICATED: "/authenticated",
    API_LOGIN: "/login",
    API_LOGOUT: "/logout"
})

###
    Defines configuration for the test/review module
###
commonModule.constant('TestPreviewConfig', {
    # Test Service API
    API_CREATE_PROFILE: "/profile/create",
    API_PROFILE_EVALUATE: "/profile/evaluate",
    API_GET_PROFILE: "/profile/{profileId}",
    API_UPDATE_PROFILE: "/profile/update",
    API_DELETE_PROFILE: "/profile/{profileId}",
    API_LIST_ALL_PROFILES: "/profiles",
    API_LIST_CHANNEL_PROFILES: "/profiles?channelId={channelId}",
    # ENQUIRY Service API
    API_ENQUIRY_RESULTS: "/enquiry/results/{id}/{env}/{chn}/{acId}",
    API_CREATE_ENQUIRY: "/enquiry",
    API_GET_ENQUIRY_DEBUG_RESULTS: "/enquiry/results/debug/{id}/{env}/{chn}"
})

