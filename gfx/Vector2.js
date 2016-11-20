// @flow

class Vector2 {
    x = 0;
    y = 0;    

    constructor(opts: any) {
        this.set(opts.src || opts);
    }

    getZero() {
        return new Vector2({x: 0, y: 0});
    }

    set(opts: any) {
        this.x = opts.x;
        this.y = opts.y;
    }
}

export default Vector2;