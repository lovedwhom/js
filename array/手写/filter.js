function filter(array,filterCallback) {
    if (!Array.isArray(array) || !array.length || typeof filterCallback !=='function') {
        return []
    }else {
        let result = []
        for (let i = 0; i < array.length; i++) {
            if (filterCallback(array[i],i,array)){
                result.push(arr[i])
            }
        }

        return result
    }
}

let arr = [1,2,3,4,5]
let res = filter(arr,(item)=>item>2)
console.log(res)
