class Solution {
    public String makeFancyString(String s) {
        if(s.length()<3)return s;
        StringBuilder sb = new StringBuilder();
        for(int i = 0;i<s.length()-2;i++){
            char c1 = s.charAt(i);
            char c2 = s.charAt(i+1);
            char c3 = s.charAt(i+2);
            if(c1==c2 && c2==c3)continue;
            else sb.append(c1);
        }
        sb.append(s.charAt(s.length()-2));
        sb.append(s.charAt(s.length()-1));
        return sb.toString();
    }
}
