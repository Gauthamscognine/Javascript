class Solution {
    public int[] sortByBits(int[] arr) {
        Arrays.sort(arr);
        HashMap<Integer , ArrayList<Integer>> hm = new HashMap<>();
        for(int i=0;i<arr.length;i++){
            int noof1 = 0;
            int n = arr[i];
            while(n>0){
                if(n%2!=0)noof1++;
                n=n/2;
            }
            if(!hm.containsKey(noof1)) hm.put(noof1,new ArrayList<>());
            hm.get(noof1).add(arr[i]);
        }

        int[] res = new int[arr.length];
        int k = 0;
        List<Integer> li = new ArrayList<>(hm.keySet());
        Collections.sort(li);
        for(Integer keys : li){
            List<Integer> list = hm.get(keys);
            for(Integer nums : list ){
                res[k++] = nums;
            }
        }
        return res;
    }
}
