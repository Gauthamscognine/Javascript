class Solution {
    public String countAndSay(int n) {
        List<String> list = new ArrayList<>();
        String s = "1";
        list.add(s);

        for (int i = 1; i < n; i++) {
            int count = 1;
            StringBuilder s1 = new StringBuilder();

            for (int j = 1; j < s.length(); j++) {
                if (s.charAt(j) == s.charAt(j - 1)) {
                    count++;
                } else {
                    s1.append(count);
                    s1.append(s.charAt(j - 1));
                    count = 1;
                }
            }
            s1.append(count);
            s1.append(s.charAt(s.length() - 1));

            s = s1.toString();
            list.add(s);
        }
        return list.get(n - 1);
    }
}
