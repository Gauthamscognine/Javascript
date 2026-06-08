class Solution {
    public int[] pivotArray(int[] nums, int pivot) {
        List<Integer> small=new ArrayList<>();
        List<Integer> big = new ArrayList<>();
        int[] res = new int[nums.length];
        int c = 0;
        for(int i=0;i<nums.length;i++){
            if(nums[i]<pivot)small.add(nums[i]);
            else if (nums[i]==pivot)c++;
            else big.add(nums[i]);
        }
        int index = 0;
        for(int i=0;i<small.size();i++){
            res[index]=small.get(i);
            index++;
        }
        for(int i=0;i<c;i++){
            res[index]=pivot;
            index++;
        }
        for(int i=0;i<big.size();i++){
            res[index]=big.get(i);
            index++;
        }
        return res;
    }
}
