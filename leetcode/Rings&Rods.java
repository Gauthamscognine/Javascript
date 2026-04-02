class Solution {
    public int countPoints(String s) {
        HashMap<Character,HashSet<Character>> hm = new HashMap<>();
        for(int i=0;i<s.length();i++){
            if(s.charAt(i)!='B' && s.charAt(i)!='G' && s.charAt(i)!='R'){
                char ch = s.charAt(i);
                hm.putIfAbsent(ch,new HashSet<Character>());
                hm.get(ch).add(s.charAt(i-1));
            }
        }
        int count = 0;
        for(char c : hm.keySet()){
            System.out.println(hm.get(c));
            if(hm.get(c).size()>=3){
                count++;
            }
        }
        return count;
    }
}
