//Problem No : 2260 : Minimumn Consecutive cards to Pick 
class Solution {
    public int minimumCardPickup(int[] cards) {
        HashMap<Integer,List<Integer>> map= new HashMap<>();
        for(int i = 0;i<cards.length;i++){
            map.putIfAbsent(cards[i],new ArrayList<>());
            map.get(cards[i]).add(i);
        }
        int res = Integer.MAX_VALUE;
        boolean flag = false;
        for(int i : map.keySet()){
            if(map.get(i).size()>=2){
                flag = true;
                int min = Integer.MAX_VALUE;
                for(int j = 1;j<map.get(i).size();j++){
                    min = Math.min(min ,(map.get(i).get(j)-map.get(i).get(j-1))+1);
                }
                res = Math.min(res ,min );
            }
        }
        if(flag)return res;
        return -1;
    }
}
