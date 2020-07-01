function Parent(name,friends) {
    this.name = name
    this.friends = friends
}

Parent.prototype = {
    constructor:Parent,
    share: [1, 2, 3],
    log:function () {
        return this.name
    }
}

function Child(name,friends,gender) {
    Parent.call(this,name,friends)
    this.gender = gender
}

Child.prototype = new Parent()
Child.prototype.constructor = Child


let p1 = new Child('yang',['he'],'boy')
let p2 = new Child('he',['jin'],'boy')
console.log(p1)
console.log(p2)
