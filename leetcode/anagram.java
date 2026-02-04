class Solution {
    public boolean isAnagram(String s, String t) {
        if(s.length()!=t.length()) return false;

        int[] arr = new int[26];

        for(int i=0;i<s.length();i++){
            arr[s.charAt(i)-97]++;
            arr[t.charAt(i) - 97]--;
        }

        for(int j : arr){
            if(j!=0) return false;
        }

        return true;
    }
}
