class Solution {
    public int minFlips(String s) {
        String t = s + s;

        StringBuilder sb = new StringBuilder();   
        StringBuilder sb1 = new StringBuilder();  

        int n = s.length();

        for (int i = 0; i < 2 * n; i++) {
            if (i % 2 == 0) {
                sb.append('1');
                sb1.append('0');
            } else {
                sb.append('0');
                sb1.append('1');
            }
        }

        int sbcount = 0;
        int sb1count = 0;


        for (int i = 0; i < n; i++) {
            if (t.charAt(i) != sb.charAt(i)) sbcount++;
            if (t.charAt(i) != sb1.charAt(i)) sb1count++;
        }

        int res = Math.min(sbcount, sb1count);

        int left = 0;

        for (int right = n; right < 2 * n; right++) {

            // add new character
            if (t.charAt(right) != sb.charAt(right)) sbcount++;
            if (t.charAt(right) != sb1.charAt(right)) sb1count++;

            // remove old character
            if (t.charAt(left) != sb.charAt(left)) sbcount--;
            if (t.charAt(left) != sb1.charAt(left)) sb1count--;

            left++;

            res = Math.min(res, Math.min(sbcount, sb1count));
        }

        return res;
    }
}
