function Parent(name,friends) {
    this.name = name
    this.friends = friends
}

Parent.prototype = {
    constructor:Parent,
    share:[1,2,3],
    log:function () {
        return this.name
    }
}

function Child(name,friends,gender) {
    Parent.call(this, name, friends) // ⚡ 这里只需要调用一次 Parent
    this.gender = gender
}
let F = function () {

}

F.prototype = Parent.prototype

Child.prototype = new F()
Child.prototype.constructor = Child
