import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DefaultPage } from "./defaultPage";
import { UserQuickEdit } from "./_share/components/userQuickEdit";
import { UserService } from "./userService";
// @NgModule({
//     imports:[BrowserModule,FormsModule],
//     declarations:[DefaultPage],
//     bootstrap:[DefaultPage]
// })
//export class AppModule{}



@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [DefaultPage, UserQuickEdit],
    bootstrap: [DefaultPage],
    providers: [UserService]
})
export class AppModule { }
