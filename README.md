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

To compile coffeescript, copy files to dist and concat into one use respectively grunt tasks: coffee, copy and uglify.
grunt dist runs all those tasks.
Complete, minified js file can be found in dist/common-module.min.js

