{
    const arr = [1,2,3,4,5];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    console.log(arr.reduce(reducer));
    console.log(arr.reduce(reducer,5))
}