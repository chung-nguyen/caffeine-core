// @flow

import ObjectPool from "./ObjectPool";

class ListPool {
    _listPool = new ObjectPool({
        factory: () => [],
        onRelease: (l) => { l.length = 0; }
    });

    Get = ():[] => {
        return this._listPool.Get();
    }

    Release = (toRelase:[]):void => {
        this._listPool.Release(toRelase);
    }
}

export default ListPool;