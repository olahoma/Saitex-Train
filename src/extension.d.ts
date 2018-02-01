declare interface IIoCContainer {
    reslove(data: string): any;
}
declare interface Window {
    ioc: IIoCContainer;
}