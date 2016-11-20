// @flow

import { Vector2 } from "../gfx";

class Canvas {

    _screenSize = new Vector2(750, 1334);
    _refResolution = new Vector2(750, 1334);
    _matchWidthOrHeight = 0.5;
    _scaleFactor = 1.0;    

    constructor(opts: any) {

    }
    
    setRefResolution(size: Vector2) {
        this._refResolution.set(size);
        this._updateProps();
    }

    setScreenSize(size: Vector2) {
        this._screenSize.set(size);
        this._updateProps();
    }

    _updateProps() {
        const logWidth = Math.log2(this._screenSize.x / this._refResolution.x);
        const logHeight = Math.log2(this._screenSize.y / this._refResolution.y);
        const t = this._matchWidthOrHeight;
        const logWeightedAverage = logWidth * (1 - t) + logHeight * t;
        this._scaleFactor = Math.pow(2, logWeightedAverage);
    }
}