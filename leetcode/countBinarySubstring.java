class Solution {
    public int countBinarySubstrings(String s) {
        int ans= 0 ,  prev = 0 ,  cur = 1;
        for(int i=1;i<s.length();i++){
            if(s.charAt(i)==s.charAt(i-1)) cur++;
            else {
                prev = cur;
                cur = 1;
            }
            if(cur<=prev) ans++;
        }
        return ans;
    }
}
