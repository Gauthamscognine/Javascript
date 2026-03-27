class Solution {
    public int countValidSelections(int[] nums) {
        int sum = 0;
        for(int i=0;i<nums.length;i++){
            sum+=nums[i];
        }
        int result = 0;
        int cursum = 0;
        for(int i=0;i<nums.length;i++){
            cursum+=nums[i];
            sum-=nums[i];
            if(nums[i]==0 && cursum==sum){
                result+=2;
            }
            else if(nums[i]==0 && (Math.abs(sum-cursum)==1))result++;
        }
        return result;

    }
}
