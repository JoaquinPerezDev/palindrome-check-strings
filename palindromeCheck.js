// Write a function that takes in a non-empty string and returns a boolean 
// representing whether the string is a palindrome.

// A palindrome is defined as a string that's written the same forward and backward. 
// Not that single-character strings are palindromes. 

// Sample input: string = "abcdcba"
// Sample output: true

//naive approach: Since a palindrome has to be written identically forwards and 
//backwards, we can use a left and a right pointer to compare the values at each
//index these pointers are on and if at any time in the loop those values are 
//different, we can return false. Otherwise, if the loop completes without returning
//false, we can then return true. 


//time complexity: Given that we're only running one loop, the runtime for this 
//approach is O(n) where n is the size of the string.

//space complexity: Given that we're using two pointers and no additional data 
//structures, this algorithm runs at O(1) constant space.

//O(n) time | O(1) space
function isPalindrome(string) {
  let leftIdx = 0;
  let rightIdx = string.length - 1;
  while(leftIdx < rightIdx) {
    if(string[leftIdx] !== string[rightIdx]) return false;
    leftIdx++;
    rightIdx--;
  }
  return true;
}