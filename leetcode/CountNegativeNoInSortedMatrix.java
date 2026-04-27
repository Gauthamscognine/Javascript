class Solution {
    public int countNegatives(int[][] grid) {
        int result = 0;
        for(int i= 0;i<grid.length;i++){
            List<Integer> li = new ArrayList<>();
            for (int val : grid[i]) {
                li.add(val);
            }
            int low = 0;
            int high = li.size()-1;
            while(low<=high){
            int mid = (low+high)/2;
                if(li.get(mid)<0){
                    high = mid-1;
                }
                else low  = mid+1;
            }
            result+=li.size()-low;
        }
        return result;
    }
}
