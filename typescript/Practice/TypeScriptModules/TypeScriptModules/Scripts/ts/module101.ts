/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/toastr/toastr.d.ts" />
interface ITest
{
    areName: string;
    run():void;    
}

class Test implements ITest {
    areName: string;
    /*rivate _areName: string;*/

    constructor(areaName: string) {
         this.areName = areaName;
    }

    run() {
        //throw new Error("Method not implemented.");
        toastr.success("Successfull Start");
    }

}

