// 1.判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
// 2.判断传入上下文对象是否存在，如果不存在，则设置为 window 。
// 3.处理传入的参数，截取第一个参数后的所有参数。
// 4.将函数作为上下文对象的一个属性。
// 5.使用上下文对象来调用这个方法，并保存返回结果。
// 6.删除刚才新增的属性。
// 7.返回结果




Function.prototype.myCall  =function (context) {
    if (typeof this !== 'function') {
        throw new TypeError("Error");
    }
    // 获取参数
    let  args = [...arguments].slice(1),result=null;
    // 判断 context 是否传入，如果未传入则设置为 window
    context = context ||window
    // 将调用函数设为对象的方法
    context.fn = this

    result = context.fn(...args)

    delete context.fn

    return result

}
let obj = {
    name: "一个"
}
function allName(firstName, lastName) {
    console.log(`我的全名是“${firstName}${this.name}${lastName}”`)
}

allName.myCall(obj,'我是', '前端')
