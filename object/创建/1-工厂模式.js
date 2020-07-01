function createPerson(name,age,job) {
    var o = new Object()
    o.name = name
    o.age = age
    o.job = job
    o.sayname = function () {
        alert(this.name)
    }
    return o
}

var person1 = createPerson('yang',19,'student')
var person2 = createPerson('jin',21,'student')

