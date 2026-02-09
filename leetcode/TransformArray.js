class Solution {
    public int[] constructTransformedArray(int[] nums) {
        int[] result = new int[nums.length];
        int n = nums.length;

        for(int i=0;i<nums.length;i++){
            int curvalue = nums[i]; //-2
            int index = i+curvalue;
            if(index >= n){
                index=index%n ; 
            }
            else if (index<0){
               index = index%n;
               System.out.println(index);
               index = index+n;
               System.out.println(index);

            }

            result[i] = nums[index];
        }

        return result;


    }
}
