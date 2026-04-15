class Solution {
    public int closestTarget(String[] words, String target, int startIndex) {
        List<Integer> li = new ArrayList<>();
        for(int i = 0;i<words.length;i++){
            if(words[i].equals(target))li.add(i);
        }
        if(li.isEmpty()){
            return -1;
        }
        int res = Integer.MAX_VALUE;
        int n = words.length;
        for(int i =0;i<li.size();i++){
            int index = li.get(i);
            int c1 = Integer.MAX_VALUE;
            int c2 = Integer.MAX_VALUE;
            if(index>startIndex){
                int nr = index - startIndex;
                int cr = startIndex + (n-index);
                c1 = Math.min(nr , cr);
            }
            else{
                int nl = startIndex - index;
                int cl = (n - startIndex) +(index);
                c2 = Math.min(nl,cl);
            }
            res = Math.min(res,Math.min(c1,c2));
        }
        return res;
    }
}
