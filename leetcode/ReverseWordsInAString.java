class Solution {
    public String reverseWords(String s) {
        ArrayList<String> arr = new ArrayList<>();
      

        int j = 0;
        StringBuilder sb = new StringBuilder();
        while(j<s.length()){
            if(s.charAt(j)!=' '){
                sb.append(s.charAt(j));
            }
            else {
                if(sb.length()>0){
                    arr.add(sb.toString());
                    sb.setLength(0);
                }
            }
            j++;
        }
         if(sb.length()>0)arr.add(sb.toString());
        StringBuilder ss = new StringBuilder();
        for(int i=arr.size()-1;i>=0;i--){
            ss.append(arr.get(i));
            if(i!=0)ss.append(' ');
        }
        return ss.toString();
    }
}
