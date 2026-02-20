class Solution {
    public int integerBreak(int n) {
        if(n==3) return 2;
        if(n==2) return 1;
        int c = 0;
        while(n>=3){
            c++;
            n=n-3;
        }
        while(n<=1){
            c--;
            n+=3;
        }

        return (int)(Math.pow(3,c)*n);
    }
}
