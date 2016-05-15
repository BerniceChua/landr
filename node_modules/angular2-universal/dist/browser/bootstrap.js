"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var prebootCompleted = false;
function prebootComplete(value) {
    if ('preboot' in window && !prebootCompleted) {
        window.preboot.complete();
    }
    return value;
}
exports.prebootComplete = prebootComplete;
function bootstrap(appComponentType, appProviders) {
    if (appProviders === void 0) { appProviders = null; }
    return platform_browser_dynamic_1.bootstrap(appComponentType, appProviders)
        .then(prebootComplete);
}
exports.bootstrap = bootstrap;
//# sourceMappingURL=bootstrap.js.map