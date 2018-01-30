System.register(["@angular/platform-browser-dynamic", "./modules/app/appModule"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, appModule_1;
    return {
        setters: [
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (appModule_1_1) {
                appModule_1 = appModule_1_1;
            }
        ],
        execute: function () {
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(appModule_1.AppModule);
            //console.log("Main file was bootstraped"); 
        }
    };
});
//# sourceMappingURL=main.js.map