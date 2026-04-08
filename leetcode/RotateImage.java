// Problem Number - 48 - Roate Image

class Solution {
    public void rotate(int[][] matrix) {
        int n = matrix.length;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                int temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
        }
    }
    for(int i=0;i<matrix.length;i++){
       ArrayList<Integer> li = new ArrayList<>();
        for(int val : matrix[i]) li.add(val);
            Collections.reverse(li);
            for(int j=0;j<li.size();j++){
                matrix[i][j] = (int)li.get(j);
            }
        }
    }
}
