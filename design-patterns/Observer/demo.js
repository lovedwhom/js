class ObserverList {
    constructor() {
        this.list = [];
    }

    add(obj) {
        this.list.push(obj);
    }

    removeAt(index) {
        this.list.splice(index, 1);
    }

    count() {
        return this.list.length
    }

    get(index) {
        if (index < 0 || index >= this.count()) {
            return;
        }
        return this.list[index]
    }

    indexOf(obj, start = 0) {
        let pos = start;
        while (pos<this.count()){
            if(this.list[pos] ===obj){
                return pos
            }
            pos ++
        }
        return -1
    }

}

class Observer {
    constructor(fn) {
        this.update =fn
    }
}

class Subject {
    constructor() {
        this.observers = new ObserverList();
    }

    addObserver(observer) {
        this.observers.add(observer)
    }

    removeObserver(observer) {
        this.observers.removeAt(this.observers.indexOf(observer))
    }

    notify(context) {
        const count = this.observers.count();
        for (let i = 0;i<count;++i) {
        }

    }
}
