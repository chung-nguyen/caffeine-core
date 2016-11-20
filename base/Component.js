// @flow

class Component
{
    _container = null;
    _isActive = true;

    constructor() {

    }

    setContainer(obj: any): void {
        this._container = obj;
    }

    isActive(): boolean {    
        return this._isActive;     
    }

    setActive(value: boolean): void {
        this._isActive = value;
    }
}

export default Component;