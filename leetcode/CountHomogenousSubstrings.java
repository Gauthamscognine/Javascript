class Solution {
    public int countHomogenous(String s) {
        HashMap<Character,Integer> hm = new HashMap<>();
        int res = 0;
        int MOD = 1000000007;
        for(int i=0;i<s.length();i++){
            char ch = s.charAt(i);
            if(hm.containsKey(ch)){
                hm.put(ch,hm.get(ch)+1);
                res = (res + hm.get(ch)) % MOD;
            }
            else{ 
                hm.put(ch,hm.getOrDefault(ch,0)+1);
                res+=1;
            }
            if(hm.size()>1){
                hm.keySet().removeIf(k -> k != ch);
            }
        }
        return res%MOD;
    }
}
