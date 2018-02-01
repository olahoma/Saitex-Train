//import {IUserService} from "./iuserService";
import {Promise, PromiseFactory} from "./promise";
export class UserService {
    public getUsers() : Promise{
        let def = PromiseFactory.create();
        // window.setTimeout(function(){
        //     let data = [
        //                 {
        //                     firstName: "first name user 1",
        //                     lastName: "last name user 1",
        //                     userName: "user name 1"
        //                 }
        //             ];
        //             def.reslove(data);
        // },2000);
        // return def;


        let data = [
            {
                firstName: "first name user 1",
                lastName: "last name user 1",
                userName: "user name 1"
            }
        ];
        def.reslove(data);
        return def;

        // return [
        //         {
        //             firstName: "first name user 1",
        //             lastName: "last name user 1",
        //             userName: "user name 1"
        //         },
        //         {
        //             firstName: "first name user 2",
        //             lastName: "last name user 2",
        //             userName: "user name 2"
        //         },
        //         {
        //             firstName: "first name user 3",
        //             lastName: "last name user 3",
        //             userName: "user name 3"
        //         }
        //     ];
    }
}
