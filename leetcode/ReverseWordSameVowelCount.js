class Solution {


    private int countVowels(String word) {
        int count = 0;
        for (char c : word.toCharArray()) {
            if ("aeiouAEIOU".indexOf(c) != -1) {
                count++;
            }
        }
        return count;
    }
    
    public String reverseWords(String s) {
        String[] words = s.split(" ");
        int firstVowelCount = countVowels(words[0]);
        StringBuilder result = new StringBuilder();
        result.append(words[0]);

        for (int i = 1; i < words.length; i++) {
            result.append(" ");

            if (countVowels(words[i]) == firstVowelCount) {
                result.append(new StringBuilder(words[i]).reverse());
            } else {
                result.append(words[i]);
            }
        }

        return result.toString();
}
}
