import {IUserService} from "./iuserService";
export class UserService implements IUserService  {
    public getUsers() :Array<any>{
        return [
                {
                    firstName: "first name user 1",
                    lastName: "last name user 1",
                    userName: "user name 1"
                },
                {
                    firstName: "first name user 2",
                    lastName: "last name user 2",
                    userName: "user name 2"
                },
                {
                    firstName: "first name user 3",
                    lastName: "last name user 3",
                    userName: "user name 3"
                }
            ];
    }
}
