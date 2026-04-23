// Problem: Existence of a Substring in a String and its Reverse : 3083

class Solution {
    public boolean isSubstringPresent(String s) {
        List<String> li = new ArrayList<>();
        for(int i =0;i<s.length()-1;i++){
            String str = s.substring(i,i+2);
            li.add(str);
        }
        StringBuilder sb = new StringBuilder(s);
        sb.reverse();
        for(int i =0;i<sb.length()-1;i++){
            String str = sb.substring(i,i+2);
            if(li.contains(str)) return true;
        }
        return false;
    }
}
