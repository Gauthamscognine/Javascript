class Solution {
    public long maxTotalValue(int[] nums, int k) {
        int min =Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;
        for(int i=0;i<nums.length;i++){
            if(nums[i]>max)max = Math.max(max,nums[i]);
            if(nums[i]<min)min = Math.min(min,nums[i]);
        }
        long diff = max-min;
        Long res = diff*k;
        return res;
    }
}
