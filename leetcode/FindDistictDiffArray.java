class Solution {
    public int[] distinctDifferenceArray(int[] nums) {
        int[] lr = new int[nums.length];
        int[] rl = new int[nums.length];
        int[] res = new int[nums.length];
        HashSet<Integer> hs = new HashSet<>();
        for(int i=0;i<nums.length;i++){
            hs.add(nums[i]);
            lr[i] = hs.size();
        }
        HashSet<Integer> hss = new HashSet<>();
        for(int i=nums.length-1;i>=0;i--){
            rl[i]=hss.size();
            hss.add(nums[i]);
        }

        for(int i=0;i<nums.length;i++){
            res[i] = lr[i] - rl[i];
        }
        return res;
    }
}
