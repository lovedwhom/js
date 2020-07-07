{
    let arr = [0,1,2,3,4,5]
    let arr2 = arr.flat(1)
    console.log(arr2)

    let arr3 = [0,1,2,3,[4,5,[6,7]]]
    console.log(arr3.flat(1))
    console.log(arr3.flat(2))
}