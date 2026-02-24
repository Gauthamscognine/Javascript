/**
 * @param {number[]} nums
 * @return {number}
 */
var scoreDifference = function(nums) {
    let play1 = true;
    let p1 = 0 , p2 = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2!=0) play1 = !(play1)
        if((i+1)%6==0)play1 = !(play1)

        if(play1)p1+=nums[i];
        else p2+=nums[i];

       
    }
    return p1 - p2;

};
