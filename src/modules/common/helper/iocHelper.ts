import {Promise, PromiseFactory} from "../../app/promise";
import {IoCFactory} from "../ioc/iocFactory";
let iocHelper = {
    config: config
};
export default iocHelper;
 function config():Promise{
     let def = PromiseFactory.create();
     window.ioc = IoCFactory.create();
     def.reslove({});
     return def;

 }