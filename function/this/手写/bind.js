
Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }

    var args = [...arguments].slice(1);
    fn = this;
    return function Fn() {
        return fn.apply(
            this instanceof Fn ? this :context,
            args.concat(...arguments)
        )
    }

}
