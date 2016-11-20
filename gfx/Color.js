// @flow

class Color {
    r = 0;
    g = 0;
    b = 0;
    a = 0;

    constructor(opts: any) {
        this.set(opts.src || opts);                
    }

    set(opts: any) {
        this.r = opts.r;
        this.g = opts.g;
        this.b = opts.b;
        this.a = opts.a;
    }
}

export default Color;