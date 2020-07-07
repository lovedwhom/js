
//push
{
    let arr1 =[1,2,3];
    let arr2 = [4,5];
    Array.prototype.push.apply(arr1,arr2);
    console.log(arr1)
}

//concat
{
    let arr1 =[1,2,3];
    let arr2 = [4,5];
    arr1= Array.prototype.concat.call(arr1,arr2);
    console.log(arr1)
}