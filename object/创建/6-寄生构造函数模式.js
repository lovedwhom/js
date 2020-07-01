function Person(name,age) {
    var o  = new Object();
    o.name = name
    o.age = age
    o.sayName = function () {
        console.log(this.name)
    }
    return o
}

var person1 = new Person('yang',80)
