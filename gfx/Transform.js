// @flow

import Vector2 from "./Vector2";
import Vector3 from "./Vector3";

class Transform
{
    left = 0;
    top = 0;
    right = 1;
    bottom = 1;
    z = 0;
    
    _minAnchor = new Vector2({x: 0, y: 0});
    _maxAnchor = new Vector2({x: 1, y: 1});
    _pivot = new Vector2({x: 0.5, y: 0.5});
    _rotation = new Vector3({x: 0, y: 0, z: 0});
    _scale = new Vector3({x: 0, y: 0, z: 0});    

    constructor(opts: any) {
        
    }
}