/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/toastr/toastr.d.ts" />
interface IPoint {
    getDistance() : number;
}


class Point implements IPoint {
    protected x: number;
    protected y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    getDistance() {return Math.sqrt( (this.x, this.y *this.y))}
}

var p: IPoint = new Point(4, 3);
var dist = p.getDistance();
toastr.info(`distance${dist}`);