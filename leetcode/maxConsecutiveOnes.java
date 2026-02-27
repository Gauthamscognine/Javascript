class Solution {
    public int longestOnes(int[] nums, int k) {
        int i = 0;
        int j=0;
        int l = k;
        int maxcount = 0;
        Boolean isichanged = true;
        while(j<nums.length){
            if(nums[j]==0)l--;
            while(l<0){
                if(nums[i]==0){
                    l++;
                }
                i++;
            }
            maxcount = Math.max(maxcount , j-i+1);
            j++;
        }
        return maxcount;
    }
}
