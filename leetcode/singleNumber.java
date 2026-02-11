class Solution {
    public int singleNumber(int[] nums) {
        HashSet<Integer> hm = new HashSet<>();
        for(int i=0;i<nums.length;i++){
            if(hm.contains(nums[i])) hm.remove(nums[i]);
            else {
                hm.add(nums[i]);
            }
        }
        int res = 0;
        for(int i:hm) res = i;
        return res;
    }
}
