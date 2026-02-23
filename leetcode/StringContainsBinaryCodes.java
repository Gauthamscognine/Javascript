class Solution {
    public boolean hasAllCodes(String s, int k) {
        HashSet<String> hs = new HashSet<>();
        int i=0 , j=k-1;
        int totalitems = (int)Math.pow(2,k);
        while(j<s.length()){
            hs.add(s.substring(i,j+1));
            if(totalitems==hs.size()) return true;
            
            j++;
            i++;
        }
        if(totalitems==hs.size()) return true;
        return false;
    }
}
