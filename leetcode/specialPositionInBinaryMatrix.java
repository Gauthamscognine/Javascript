class Solution {
    public boolean check(int[][] mat , int i , int j){
        int count = 0;
        for(int k=0;k<mat[i].length;k++){
            if(mat[i][k]==1)count++;
        }
        for(int k=0;k<mat.length;k++){
            if(mat[k][j]==1)count++;
        }
        if(count>2)return false;
        return true;
    }
    public int numSpecial(int[][] mat) {
        int result = 0 ;

        for(int i=0;i<mat.length;i++){
            for(int j = 0;j<mat[i].length;j++){
                if(mat[i][j]==1){
                    if(check(mat,i,j)){
                        row++;
                    }
                }
            }
        }
        return result;
    }
}
