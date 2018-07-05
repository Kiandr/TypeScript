/// <reference path="../typings/toastr/toastr.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
namespace Shapes {
    export interface IRectangle {
        height: number;
        width: number;
        getArea():number;
    }

    export class Rectangle implements IRectangle {

        constructor(height: number, width: number) {
            this.height = height;
            this.width = width;
        }
        height: number;
        width: number;
        getArea(): number {
            return (this.height * this.width);
        }

    }
}

namespace MyProgram {
    function run() {
        const rect: Shapes.IRectangle = new Shapes.Rectangle(10, 5);
        const area = rect.getArea();
         toastr.info(`Area = ${area}`);

    }

    run();
}