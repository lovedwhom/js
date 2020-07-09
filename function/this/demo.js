/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let arr = new Set(nums),result,temparr=[];
    arr.forEach(it=>{
        temparr.push(nums.filter(v=>v==it))
    })

    // temparr.map()
    temparr.sort((a,b)=>a.length-b.length)
    // result =
    return result;
};
