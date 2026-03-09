class Solution {
    public int smallestBalancedIndex(int[] nums) {
        long sum = 0;
        for(int i=0;i<nums.length;i++){
            sum+=nums[i];
        }

        long product = 1;
        int index = nums.length-1;
        Boolean doesexist = false;

        for(int i=nums.length-1;i>=1;i--){
            sum-=nums[i];
            if(i<nums.length-1){
                product*=nums[i+1];   
            }
            if(product==sum){
                doesexist = true;
                index = Math.min(index , i);
            }
        }
        if(!doesexist)return -1;
        return index;
    }
}
