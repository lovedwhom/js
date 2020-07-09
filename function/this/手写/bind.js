
Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }

    var args = [...arguments].slice(1);
    fn = this;
    return function Fn() {
        return fn.apply(
            //考虑用new调用的情况
            //还有一个特点就是bind调用的时候可以传参,调用之后生成的新的函数也可以传参
            this instanceof Fn ? this :context,
            args.concat(...arguments)
        )
    }

}
