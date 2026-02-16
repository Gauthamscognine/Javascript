class Solution {
   
    public int shipWithinDays(int[] weights, int days) {
        int sum = 0;
        int max = 0;
        for(int i=0;i<weights.length;i++){
            max = Math.max(max,weights[i]);
            sum+=weights[i];
        }
        int low = max;
        int high = sum;
        int mid = 0;

        while(low<high){
            mid = (low+high)/2;
            int curload= 0;
            int noofdays = 1;
            for(int i=0;i<weights.length;i++){  
                if(curload + weights[i]>mid){
                    curload= 0;
                    noofdays++;
                }  
                curload+=weights[i];
            }
            if(noofdays>days) low = mid +1 ;
            else high = mid;  
        }
        return low;
    }
}
