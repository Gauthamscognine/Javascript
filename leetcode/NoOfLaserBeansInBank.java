class Solution {
    public int numberOfBeams(String[] bank) {
        int prevcount= -1;
        int result = 0;
        Boolean flag = true;
        for(int i=0;i<bank.length;i++){
            int curcount=0;
            String s = bank[i];
            for(int j=0;j<s.length();j++){
                char ch = s.charAt(j);
                if(ch=='1')curcount++;
            }
            
            if(flag){
                // result+=curcount;
                flag = false;
                prevcount = curcount;
            }
            else{
                if(curcount>0) result+=(curcount*prevcount);
                if(curcount!=0)prevcount = curcount;
            }
        }
        return result ;
    }
}
