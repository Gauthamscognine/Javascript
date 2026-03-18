class Solution {
    public int countSubmatrices(int[][] grid, int k) {
        int sum = 0;
        int res = 0;
        int n = grid.length;
        int m = grid[0].length;
        for(int i=1;i<n;i++){
            grid[i][0]+=grid[i-1][0];
        }

        for(int j=1;j<m;j++){
            grid[0][j]+=grid[0][j-1];
        }

        for(int i=1;i<grid.length;i++){
            for(int j=1;j<grid[i].length;j++){
                grid[i][j]+=grid[i-1][j]+ grid[i][j-1]-grid[i-1][j-1];
                
            }
        }

        for(int i=0;i<grid.length;i++){
            for(int j=0;j<grid[i].length;j++){
                if(grid[i][j]<=k)res++;
            }
        }
        return res;
    }
}
