class Solution {
    public String convert(String s, int numRows) {
        List<List<Character>> arr = new ArrayList<>();
        for(int i = 0;i<numRows;i++){
            arr.add(new ArrayList<>());
        }
        int curval = 0;
        boolean indown = false;
        for(int i=0;i<s.length();i++){
            Character ch = s.charAt(i);
            arr.get(curval).add(ch);
            if(curval==0){
                indown = true;
            }
            else if(curval==numRows-1){
                indown = false;
            }
            if(indown){
                curval++;
            }
            else{
                curval--;
            }
        }
        StringBuilder sb = new StringBuilder();
        for(List<Character> li : arr){
            for(char c : li){
                sb.append(c);
            }
        }
        return sb.toString();
    }
}
