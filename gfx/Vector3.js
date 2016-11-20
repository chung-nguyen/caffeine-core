// @flow

class Vector3 {
    x = 0;
    y = 0;
    z = 0;    

    constructor(opts: any) {
        this.set(opts.src || opts);
    }

    getBack() {
        return new Vector3({x: 0, y: 0, z: -1});
    }

    set(opts: any) {
        this.x = opts.x;
        this.y = opts.y;
        this.z = opts.z;
    }
}

export default Vector3;