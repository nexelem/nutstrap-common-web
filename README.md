### angular-common-web

This module contains core AngularJS functionality that is used by all of the other modules.


#### Using the angular-common-web module

include the library in your main angular file  (app.coffee / app.js).

```
dependencies = [
    'myApp.common'
]
```
and add the module into angular

```
@i18nModule = angular.module('myApp.common', [])
```

finally you can add the js to your html, (index.html)

```
<script src='@routes.WebJarAssets.at(WebJarAssets.locate("Extensions.js"))' type="text/javascript"></script>
<script src='@routes.WebJarAssets.at(WebJarAssets.locate("Config.js"))' type="text/javascript"></script>
<script src='@routes.WebJarAssets.at(WebJarAssets.locate("HttpService.js"))' type="text/javascript"></script>
<script src='@routes.WebJarAssets.at(WebJarAssets.locate("ConfigService.js"))' type="text/javascript"></script>
<script src='@routes.WebJarAssets.at(WebJarAssets.locate("DateService.js"))' type="text/javascript"></script>
<script src='@routes.WebJarAssets.at(WebJarAssets.locate("TrackedChangeUtils.js"))' type="text/javascript"></script>
```

