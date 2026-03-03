class Solution {
    public String solveback(String s){
        StringBuilder ss = new StringBuilder(s);
        ss.reverse();
        String sn = ss.toString();
        char[] curstr = sn.toCharArray();
        for(int i=0;i<curstr.length;i++){
            if(curstr[i]=='0') curstr[i]='1';
            else curstr[i]='0';
        }
        String sh = new String(curstr);
        return sh;
    }
    public String recursive(int n){
        if(n==1)return "0";
        String s = recursive(n-1);
        String front = s;
        String back = solveback(s);
        StringBuilder sb = new StringBuilder();
        sb.append(front);
        sb.append("1");
        sb.append(back);
        return sb.toString();
    }
    public char findKthBit(int n, int k) {
        String s = recursive(n);
        return s.charAt(k-1);
    }
}
