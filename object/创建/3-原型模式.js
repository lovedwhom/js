function Person() {

}

Person.prototype.name = 'yang'
Person.prototype.age = 20

Person.prototype.sayName = function () {
    // (this.name)
    console.log(this.name)
}

var person1 = new Person()

var person2 = new Person()

person1.name = 'he'

person2.sayName()
