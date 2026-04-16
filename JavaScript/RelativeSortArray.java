class Solution {
    public int[] relativeSortArray(int[] arr1, int[] arr2) {
        HashMap<Integer,Integer> hm = new HashMap<>();
        for(int i=0;i<arr1.length;i++){
            hm.put(arr1[i],hm.getOrDefault(arr1[i],0)+1);
        }
        int[] res = new int[arr1.length];
        int index = 0;
        for(int i=0;i<arr2.length;i++){
            int x = hm.get(arr2[i]);
            for(int j = 0;j<x;j++){
                res[index] = arr2[i];
                index++;
            }
            hm.remove(arr2[i]);
        }
        List<Integer> li = new ArrayList<>();
        for(int i:hm.keySet()){
            int x = hm.get(i);
            for(int j = 0;j<x;j++){
                li.add(i);
            }
        }
        Collections.sort(li);
        for(int i=0;i<li.size();i++){
            res[index] = li.get(i);
            index++;
        }
        return res;
    }
}
