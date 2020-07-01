function Person(name) {
    this.name = name
    this.className = 'person'
}
Person.prototype.getClassName = function () {
    console.log(this.className)
}

function Man() {

}

Man.prototype = new Person();

var man = new Man()

man.getClassName()
