function Person(name,age) {
    this.name = name
    this.age = age
}

Person.prototype  = {
    constructor:Person,
    sayName:function () {
        console.log(this.name)
    }
}

var person1 = new Person('yang',20)

var person2 = new Person('he',23)


