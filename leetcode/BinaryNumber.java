class Solution {
    public boolean hasAlternatingBits(int n) {
        String s = Integer.toBinaryString(n);
        // System.out.print(s);
        for(int i=0;i<s.length()-1;i++){
            if(s.charAt(i)==s.charAt(i+1))return false;
        }
        return true;
    }
}
