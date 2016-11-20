// @flow 
class UIObject
{
    _components = [];
    _children = [];
    _parent = null;

    addComponent(c: any): void {
        this._components.push(c);
        c.SetContainer(this);
    }

    addChild(obj: any): void {
        const idx = this._children.findIndex(child => child === obj);
        if (idx < 0) {
            this._children.push(obj);
            obj.setParent(this);
        }        
    }

    setParent(obj: any): void {
        this._parent = obj;        
    }
}

export default UIObject;