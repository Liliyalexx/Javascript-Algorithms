class Solution {
  public boolean arrayStringsAreEqual(String[] word1, String[] word2) {
      return string(word1).equals(string(word2));
  }
  public static String string(String[] ar) {
      StringBuilder str = new StringBuilder();
      for(int i=0; i<ar.length; i++) {
          str.append(ar[i]);
      }
      return str.toString();
  }
}
___________________________________________________
class Solution {
  public boolean arrayStringsAreEqual(String[] word1, String[] word2) {
      String s1=makeString(word1);
      String s2=makeString(word2);
      return s1.equals(s2);
  }
  String makeString(String []word){
StringBuilder sb=new StringBuilder();
  
  for (String s:word){
  sb.append(s);
  
  }
      return sb.toString();
      
      }
}


______________________________________________________________

class Solution {
  // Time Complexity - O(min(N1, N2))
  // Space Complexity - O(1)
  // where N1 is the total number of characters in word1 array
  // and N2 is the total number of characters in word2 array
  // Solution uses only pointers and no string concatentaion, and thus space complexity is constant
  public boolean arrayStringsAreEqual(String[] word1, String[] word2) {
      // Base Condition - Null Check
      if (word1 == null || word2 == null) {
          return false;
      }
      
      // Counters for words and characters in word1 array
      int w1 = 0;
      int i = 0;
      
      // Counters for words and characters in word2 array
      int w2 = 0;
      int j = 0;
      
      // Iterating both the word arrays charcater-by-character
      while (w1 < word1.length && w2 < word2.length) {
          while (i < word1[w1].length() && j < word2[w2].length()) {
              if (word1[w1].charAt(i) != word2[w2].charAt(j)) {
                  return false;
              }
              
              i++;
              j++;
          }
          
          // Move to the next word in word1 array and reset the character pointer to 0
          if (i == word1[w1].length()) {
              w1++;
              i = 0;
          }
          
          // Move to the next word in word2 array and reset the charcater pointer to 0
          if (j == word2[w2].length()) {
              w2++;
              j = 0;
          }
      }
      
      // Check if all the words have been exhausted in both the arrays
      return w1 == word1.length && w2 == word2.length;
  }
}



///Java Script

var arrayStringsAreEqual = function(word1, word2) {
  return word1.join('') === word2.join('')
};

//
var arrayStringsAreEqual = function(word1, word2) {
  let s1 = word1.join('');
  let s2 = word2.join('');
  return !!(s1 === s2);
};
