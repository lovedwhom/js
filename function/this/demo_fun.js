

//1
{
    function fn1() {
        console.log(this.a);
        console.log(this)
    }
    // fn1();
}
//2
{
    {
        let o ={
            a:1,
            fn:function () {
                console.log(this.a);
                console.log(this)
            }
        };
        // o.fn()
    }


    {
        var a='window';
        let o2 = {
            a:'a2',
            b: {
                a:'b',
                fn: function () {
                    console.log(this.a);
                    console.log(this)
                }
            }
        };
        // o2.b.fn()
    }

    {
        var a='window';
        let o2 = {
            a:'a2',
            b: {
                a:'b',
                fn: function () {
                    console.log(this.a);
                    console.log(this)
                }
            }
        };
        let fn2 =o2.b.fn;
        // fn2();
        //window
    }

}

//构造函数
{
    function f() {
        this.a='f'
    }
    let fn2 = new f();
    console.log(fn2.a)
}
