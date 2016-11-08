// @flow

const _defaultFactory = () => {
    return {};
}

class ObjectPool
{
    _stack:any[] = [];
    _countAll: number = 0;
    _factory: Function = _defaultFactory;
    _onGet: Function;
    _onRelease: Function;

    countAll = ():number => this._countAll;
    countActive = ():number => this._countAll - this._stack.length;
    countInactive = ():number => this._stack.length;    

    constructor(opts:any) {
        this._factory = opts.factory || _defaultFactory;
        this._onGet = opts.onGet;
        this._onRelease = opts.onRelease;
    }
        
    Get = ():any => {
        let e:any;

        if (this._stack.length == 0) {
            e = this._factory();
            this._countAll++;
        }
        else 
        {
            e = this._stack[this._stack.length - 1];
            this._stack.length = this._stack.length - 1;
        }

        this._onGet && this._onGet(e);
        return e;
    }


    Release = (e: any): any => {
        this._onRelase && this._onRelease(e);
        this._stack.push(e);
    }
}

export default ObjectPool;
