class Solution {
    public int numberOfSpecialChars(String word) {
        HashMap<Character,Integer> hm = new HashMap<>();
        HashSet<Character> hs = new HashSet<>();
        for(int i =0;i<word.length();i++){
            char ch  = word.charAt(i);
            if(ch>='A' && ch<='Z'){
                if(!hm.containsKey(ch))hm.put(ch,i);
            }
            else{
                hm.put(ch,i);
                hs.add(ch);
            } 
        }
        int res=0;
        for(char ch:hs){
            char cch=(char)(ch-32);
            if(hm.containsKey(cch)){
                if(hm.get(ch)<hm.get(cch))res++;
            }
        }
        return res;
    }
}
