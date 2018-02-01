enum PromiseStatus{
    None,
    Then,
    Reslove
}
export class PromiseFactory{
    public static create(){
        return new Promise();
    }
}

export class Promise{
    private onSuccessCallBack:any;
    private data :any = null;
    private status : PromiseStatus = PromiseStatus.None;
    public then(callback : any):Promise{
         this.onSuccessCallBack = callback;
         this.processPromise();
         this.status = PromiseStatus.Then;
         return this;
    }
    public reslove(data:any){
        this.data = data;
        this.processPromise();
        this.status = PromiseStatus.Reslove;
        //this.onSuccessCallBack(data);
    }
    private processPromise(){
        if(this.status == PromiseStatus.Reslove || this.status == PromiseStatus.Then){
            this.onSuccessCallBack(this.data);
        }
       
    }
    
}