class Solution {
    int[][] dirs = {{-1,0}, {1, 0}, {0, -1}, {0, 1}, {-1, -1}, {-1, 1}, {1, -1}, {1, 1}};
    HashMap<Integer,Integer> map;
    public Boolean isprime(int n){
        if(n<=1)return false;
        for(int i=2;i<=Math.sqrt(n);i++){
            if(n%i==0)return false;
        }
        return true;
    }
    private void trverse(int starti, int startj, int r, int c, int[][] mat){
        for(int [] dir: dirs){
            int val = 0;
            int i=starti, j=startj;
            while(i>=0 && j>=0 && i<r && j<c) {
                val *= 10;
                val += mat[i][j];
                i += dir[0];
                j += dir[1];
                if(val < 10) continue;
                if(map.containsKey(val)){
                    map.put(val, map.get(val)+1);
                }else if(isprime(val)){
                    map.put(val, 1);
                }       
            }
        }
    }
    public int mostFrequentPrime(int[][] mat) {
        map = new HashMap<>();
        for(int i=0;i<mat.length;i++){
            for(int j = 0;j<mat[i].length;j++){
                trverse(i,j,mat.length,mat[i].length,mat);
            }
        }
        int c = 0, ans = -1;
        for(int key:map.keySet()){
            int val = map.get(key);
            if(val>c){
                c=val;
                ans=key;
            }
            else if (val==c){
                ans=Math.max(ans,key);
            }
        }
        return ans;
    }
}
