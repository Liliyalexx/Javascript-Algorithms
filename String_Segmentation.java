
You can solve this problem by segmenting the large string at each possible 
position to see if the string can be completely segmented to words in the 
dictionary. If you write the algorithm in steps it will be as follows:n = length 
of input string
for i = 0 to n - 1
  first_word = substring (input string from index [0, i] )
  second_word = substring (input string from index [i + 1, n - 1] )
  if dictionary has first_word
    if second_word is in dictionary OR second_word is of zero length, then 
    return true recursively call this method with second_word as input and 
    return true if it can be segmented


public class StringSegmentation {

  public static boolean canSegmentString(String s, Set <String> dictionary) {
    for (int i = 1; i <= s.length(); ++i) {
      String first = s.substring(0, i);
      if (dictionary.contains(first)) {
        String second = s.substring(i);

        if (second == null || second.length() == 0 || dictionary.contains(second) || canSegmentString(second, dictionary)) {
          return true;
        }

      }
    }
    return false;
  }

  public static void main(String[] args) {
    Set < String > dictionary = new HashSet < String > ();
    String s = new String();
    s = "hellonow";

    dictionary.add("hello");
    dictionary.add("hell");
    dictionary.add("on");
    dictionary.add("now");
    if (canSegmentString(s, dictionary)) {
      System.out.println("String Can be Segmented");
    } else {
      System.out.println("String Can NOT be Segmented");
    }
  }
}class String_Segmentation {
  
}

// Runtime Complexity: Exponential, O(2^n)

// Memory Complexity: Polynomial, O(n^2)

//434. Number of Segments in a String


class Solution{

  public int countSegments(String s){
      int segments = 0;
      for (int i =0; i< s.length(); i++){
         if(( i == 0 || s.charAt(i-1) == ' ') && s.charAt(i)!=' ') {
                        segments++;
         }
      }
      return segments;
  }
      
  }

//   You are given a string s, return the number of segments in the string. 

// A segment is defined to be a contiguous sequence of non-space characters.

 

// Example 1:

// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
