import { Component } from "@angular/core";
import {UserService} from "./userService";
import {IUserService} from "./iuserService";
@Component({
    selector :"Default-page",
    templateUrl:"src/Modules/App/DefaultPage.html"
})
export class DefaultPage{
    public users :Array<any> = [];
    public selectedUser : any;
    constructor(){
        let userService : IUserService = new UserService();
        this.users = userService.getUsers();
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