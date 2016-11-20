// @flow

class Vector4 {
    x = 0;
    y = 0;
    z = 0;
    w = 0;

    constructor(opts: any) {
        this.set(opts.src || opts);
    }

    set(opts: any) {
        this.x = opts.x;
        this.y = opts.y;
        this.z = opts.z;
        this.w = opts.w;
    }
}

export default Vector4;