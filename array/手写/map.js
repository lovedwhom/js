function map(arr,mapCallback) {
    if(!Array.isArray(arr) || !arr.length || typeof mapCallback !=='function'){
        return []
    }else {
        let result = [];

        for (let i = 0; i < arr.length; i++) {
            result.push(mapCallback(arr[i],i,arr))
        }
        return result
    }
}

var arr = [1,2,3,4]
let res = map(arr,(item)=>item+1)
