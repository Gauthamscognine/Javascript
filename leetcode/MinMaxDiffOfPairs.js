/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */

 function isvalid(nums , p , maxdiff){
    let  count = 0;
    for(let i = 0;i<nums.length-1;i++){
        if(nums[i+1]-nums[i]<=maxdiff){
            count++;
            i++
        }

        if(count>=p) return true;
    }
    return false;
 }
var minimizeMax = function(nums, p) {
    nums.sort();
    let low = 0;
    let high = nums[nums.length-1] - low ;

    while(low<high){
        let  mid = Math.floor((low+high)/2)

        if(isvalid(nums, p , mid)){
            high = mid ;
        }
        else low = mid+1;
    }

    return low ;

};
