///<reference path="./extension.d.ts"/>
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./modules/app/appModule";
import iocHelper from "./modules/common/helper/iocHelper";
iocHelper.config().then(function () {
    platformBrowserDynamic().bootstrapModule(AppModule);
});



//console.log("Main file was bootstraped");