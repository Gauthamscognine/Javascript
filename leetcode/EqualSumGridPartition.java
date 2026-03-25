class Solution {
    public boolean canPartitionGrid(int[][] grid) {
        List<Long> hs = new ArrayList<>();
        List<Long> hs1 = new ArrayList<>();
        long totalrsum = 0;
        long totalcsum = 0;

        for(int i=0;i<grid.length;i++){
            long rsum = 0;
            for(int j=0;j<grid[0].length;j++){
                rsum+=grid[i][j];
                totalrsum+=grid[i][j];
            }
            hs.add(rsum);                  
        }

        for(int i=0;i<grid[0].length;i++){
            long csum = 0;
            for(int j=0;j<grid.length;j++){
                csum+=grid[j][i];
                totalcsum+=grid[j][i];
            } 
            hs1.add(csum);
        }

        long finalsum = 0;
        for(int i=0;i<hs.size();i++){
            finalsum+=hs.get(i);
            totalrsum-=hs.get(i);
            if(finalsum==totalrsum)return true;
        }

        long finalcsum = 0;
        for(int i=0;i<hs1.size();i++){
            finalcsum+=hs1.get(i);
            totalcsum-=hs1.get(i);
            if(finalcsum==totalcsum)return true;
        }
        
        return false;
    }
}
