class Solution {
    public int minElement(int[] nums) {
        int res = Integer.MAX_VALUE;
        for(int i=0;i<nums.length;i++){
            int x = nums[i];
            int added = 0;
            while(x>0){
                int y = x%10;
                added+=y;
                x=x/10;
            }
            res=Math.min(res,added);
        }
        return res;
    }
}
