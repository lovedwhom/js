class Parent  {
    constructor(name, friends) {
        this.name = name
        this.friends = friends
    }
    log(){
        return this
    }
}

Parent.prototype.share = [1,2,3]

class Child extends Parent{
    constructor(name,friends,gender) {
        super(name,friends);
        this.gender = gender
    }
}
