import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
    selector: "user-quick-edit",
    templateUrl:"src/modules/app/_share/components/userQuickEdit.html"
})
export class UserQuickEdit{
    //public selectedUser : any = {firstName:"1", lastName:"2", userName:"qqqq"};
    @Input() firstName: any;
    @Output() firstNameChange : EventEmitter<any> = new EventEmitter();
    public onValueChanged(){
        this.firstNameChange.emit (this.firstName);
    }
}
