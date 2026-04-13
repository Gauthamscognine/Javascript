// Problem : 20 : Valid Paranthesis
import java.util.*;
class Solution {
    public boolean isValid(String s) {
        HashMap<Character, Character> hm = new HashMap<>();
        hm.put(')', '(');
        hm.put('}', '{');
        hm.put(']', '[');
        Stack<Character> st = new Stack<>();
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (hm.containsKey(ch)) {
                if (st.isEmpty() || st.pop() != hm.get(ch)) {
                    return false;
                }
            } else {
                st.push(ch);
            }
        }
        return st.isEmpty();
    }
}
