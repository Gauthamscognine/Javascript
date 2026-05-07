/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
import java.math.BigInteger;
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode li = l1;
        StringBuilder sb = new StringBuilder();
        while(li!=null){
            sb.append(li.val);
            li = li.next;
        }
        StringBuilder sb1 = new StringBuilder();
        ListNode lj = l2;
        while(lj!=null){
            sb1.append(lj.val);
            lj = lj.next;
        }

        sb.reverse();
        sb1.reverse();

        // Convert to BigInteger
        BigInteger num1 = new BigInteger(sb.toString());
        BigInteger num2 = new BigInteger(sb1.toString());

        // Add them
        BigInteger sum = num1.add(num2);

         String result = sum.toString();
        ListNode dummy = new ListNode(0);
        ListNode current = dummy;

        for (int i = result.length() - 1; i >= 0; i--) {
            current.next = new ListNode(result.charAt(i) - '0');
            current = current.next;
        }

        return dummy.next;
        


    }
}
