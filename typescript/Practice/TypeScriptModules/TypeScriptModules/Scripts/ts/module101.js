/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/toastr/toastr.d.ts" />
var Test = /** @class */ (function () {
    /*rivate _areName: string;*/
    function Test(areaName) {
        this.areName = areaName;
    }
    Test.prototype.run = function () {
        //throw new Error("Method not implemented.");
        toastr.success("Successfull Start");
    };
    return Test;
}());
//# sourceMappingURL=module101.js.map