// let fun = (x)=>x;
// let fun2 = (x)=>{x};
//
// console.log(fun(1));
// console.log(fun2(1));

// let fun3 = (x)=>({num:x});
// console.log(fun3(3));
// let a =1;
// let  f  = ()=>this.a;
// console.log(f());

{
    let a =1;
    let o = {
        a:1,
        b:()=>this.a,
        c:{
            fn:()=>this.a
        },
        d:function () {
           return {
               fn:()=>this.a
           }
        }

    };
    // console.log(o.b())
    // o.b();
    // console.log(o.b())
}
//arguments
{
    function f(x,y) {
        let f1 = (a) => arguments[0];
        return f1(3)
    }
    console.log(f(1,2))

}