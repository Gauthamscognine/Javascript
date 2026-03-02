class Solution {
    public int minPartitions(String n) {
        int ma = 0;
        for(int i = 0;i<n.length();i++){
            ma = Math.max(n.charAt(i)-'0',ma);
        }
        return ma;
    }
}
