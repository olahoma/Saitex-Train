import { Component } from "@angular/core";
import {UserService} from "./userService";
import {IUserService} from "./iuserService";
import {IoCNames} from "./iocNames";
@Component({
    selector :"Default-page",
    templateUrl:"src/Modules/App/DefaultPage.html"
})
export class DefaultPage{
    public users :Array<any> = [];
    public selectedUser : any;
    
    constructor(us: UserService){
        //let userService : IUserService = new UserService();
        let self = this;
        let userService : IUserService = window.ioc.reslove(IoCNames.IUserService);
         us.getUsers().then(function(data:any){
            self.users = data;
        });
    }
  

    public onEditClicked(user : any){
        this.selectedUser = user;
        console.log(user);
    }
    // public onFirstNameChanged1 (firstNamexx: any){
    //     console.log("new first name: " + firstNamexx );
    //     this.selectedUser.firstName = firstNamexx;
    // }

}