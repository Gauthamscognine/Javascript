class Solution {
    public boolean isGood(int[] nums) {
        int n = nums.length;
        Arrays.sort(nums);
        int max= nums[n-1];
        if(max>=n)return false;
        int[] res = new int[max+1];
        for(int i=0;i<nums.length;i++){
            res[nums[i]]++;
        };
        for(int i=1;i<res.length;i++){
            if(i==res.length-1){
                if(res[i]!=2)return false;
            }
            else if(res[i]!=1)return false;
        }
        return true;
    }
}
