class Solution {
    public int maxNumberOfBalloons(String text) {
        HashMap<Character,Integer> hm = new HashMap<>();
        hm.put('b',0);
        hm.put('a',0);
        hm.put('l',0);
        hm.put('o',0);
        hm.put('n',0);
        for(int i=0;i<text.length();i++){
            char ch = text.charAt(i);
            if(hm.containsKey(ch))hm.put(ch,hm.get(ch)+1);
        }
        int lcount = hm.get('l')/2;
        int ocount = hm.get('o')/2;
        int result = Integer.MAX_VALUE;
        for(char k : hm.keySet()){
            if(k!='l' && k!='o')result = Math.min(hm.get(k),result);
        }
        result = Math.min(result , lcount);
        result = Math.min(result,ocount);
        return result;
        
    }
}
