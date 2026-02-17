class Solution {
    public int[] searchRange(int[] nums, int target) {

        int si = -1;
        int li = -1;

        // 🔹 Find first index (si)
        int low = 0, high = nums.length - 1;
        while(low <= high){
            int mid = (low + high) / 2;

            if(nums[mid] == target){
                si = mid;
                high = mid - 1; // move left
            }
            else if(nums[mid] > target){
                high = mid - 1;
            }
            else{
                low = mid + 1;
            }
        }

        // 🔹 Find last index (li)
        low = 0; 
        high = nums.length - 1;

        while(low <= high){
            int mid = (low + high) / 2;

            if(nums[mid] == target){
                li = mid;
                low = mid + 1; // move right
            }
            else if(nums[mid] > target){
                high = mid - 1;
            }
            else{
                low = mid + 1;
            }
        }

        int[] res = new int[2];
        res[0] = si;
        res[1] = li;

        return res;
    }
}
