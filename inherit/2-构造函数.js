function Person(name) {
    this.name = name
    this.className = 'person'
}

Person.prototype.getName = function () {
    console.log(this.name)
}

function Man(name) {
    Person.apply(this,arguments)
}

var man1 = new Man('yang');
var man2 = new Man('he');

console.log(man1.name);
console.log(man2.name);
console.log(man1 instanceof Person)

// console.log(man1.getName())
//
// console.log(man2.getName())
//
// 优点：
// 解决了1中子类实例共享父类引用对象的问题，实现多继承，创建子类实例时，可以向父类传递参数
// 缺点：
// 实例并不是父类的实例，只是子类的实例
// 只能继承父类的实例属性和方法，不能继承原型属性/方法
// 无法实现函数复用，每个子类都有父类实例函数的副本，影响性能


