class Solution {
    public char[][] rotateTheBox(char[][] b) {
        int n =b.length , m = b[0].length;
        char[][] ans = new char[n][m];
        for(int i=0;i<n;i++)
            for(int j=0;j<m;j++)
                ans[i][j]= '.';

        for(int i=0;i<n;i++){
            int hc = 0;
            for(int j = 0;j<m;j++){
                if(b[i][j]=='#')hc++;
                if(b[i][j]=='*'){
                    ans[i][j]='*';
                    if(hc>0){
                        int d = 1;
                        for(int k = 0;k<hc;k++){
                            ans[i][j-d]='#';
                            d++;
                        }
                    }
                    hc = 0;
                }
                
            }
                if(hc>0){
                    int d = 1;
                        for(int k = 0;k<hc;k++){
                            ans[i][m-d]='#';
                            d++;
                        }
                }
        }
        char[][] trans = new char[m][n];
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < m; j++) {
                trans[j][n-1-i] = ans[i][j];
            }
        }
        return trans;
    }
}
