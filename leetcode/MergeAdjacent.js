/**
 * @param {number[]} nums
 * @return {number[]}
 */
var mergeAdjacent = function(nums) {
    let stack = [];

    for(let i=0;i<nums.length;i++){
        if( stack.length==0 || nums[i]!=stack[stack.length-1]) stack.push(nums[i]);
        else {
            let sum = nums[i];

            while(!stack.length==0 && sum==stack[stack.length-1]){
                sum+=stack.pop();
            }
            stack.push(sum);
        }
    }

    return [...stack];
};
