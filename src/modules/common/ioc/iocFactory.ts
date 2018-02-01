export class IoCFactory{
    public static create():any{
        return new IoCContainer();
    }
}
class IoCContainer implements IIoCContainer{
    public reslove(interfaceName: string):any{
        console.log("test");
    }
}
