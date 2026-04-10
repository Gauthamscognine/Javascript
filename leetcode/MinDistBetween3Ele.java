// problem  - Minimun distance between 3 equal elements I - 3740
class Solution {
    public int minimumDistance(int[] nums) {
        HashMap<Integer,List<Integer>> hm = new HashMap<>();
        for(int i=0;i<nums.length;i++){
            hm.putIfAbsent(nums[i],new ArrayList<>());
            hm.get(nums[i]).add(i);
        }
        int res = Integer.MAX_VALUE;
        Boolean flag = false;
        for(List<Integer> li : hm.values()){
            if(li.size()>=3){
                int n = li.size();
                int x = Integer.MAX_VALUE;
                for(int i=0;i<n-2;i++){
                int q = li.get(i);
                int w = li.get(i+1);
                int e = li.get(i+2);
                x = Math.min(x,Math.abs(q-w)+Math.abs(w-e)+Math.abs(q-e));
                }
                res=Math.min(res,x);
                flag = true;
            }
        }
        if(flag)return res;
        return -1;
    }
}
