function Person(name,age,job) {
    this.name  = name
    this.age = age
    this.job = job
    this.sayName = function () {
        alert(this.name)
    }
}

var person1 = new Person('yang',12,'engineer')

var person2 = new Person('he',18,'student')
