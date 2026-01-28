class Solution {
public:
bool isPalindrome(int x) {
    if (x < 0) { //negative numbers
        return false;
        }
        
        string palindrome = to_string(x); //string conversion
        int left = 0; //pointer from left
        int right = palindrome.size() - 1; //pointer from right

        while (left < right) {
            if (palindrome[left] != palindrome[right]){
            return false;
            }
            left++;
            right--;
        }
        return true;
    }
};
