function Person(name,age) {
    this.name = name;
    this.age = age;
    if (typeof this.sayName !== 'function') {
        Person.prototype.sayName=function f() {
            console.log(this.name)
        }
    }
}
