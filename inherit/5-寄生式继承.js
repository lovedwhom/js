let Parent = {
    name:'parent',
    share: [1,2,3],
    log:function () {
        return this.name
    }
}

function create(obj) {
    let clone = Object.create(obj)
    clone.print = function () {
        console.log(this.name)
    }
    return clone
}

let child = create(Parent)
// console.log(child instanceof Parent)
console.log(child.prototype)
