// Problem Number - 7

class Solution {
    public int reverse(int x) {
        if(x==0)return 0;
        String s = Integer.toString(x);
        StringBuilder sb =new StringBuilder(s);
        Boolean isexist = false;
        if(sb.charAt(0)=='-'){
            isexist = true;
            sb.delete(0,1);
        }
        sb.reverse();
        while(sb.length()>0 && sb.charAt(0)=='0'){
            sb.deleteCharAt(0);
        }
        if(isexist)sb.insert(0,'-');    
        long nn = Long.parseLong(sb.toString());
        if(nn>Integer.MAX_VALUE || nn < Integer.MIN_VALUE)return 0;
        return (int) nn;
    }
}
