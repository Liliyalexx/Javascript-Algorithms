import java.util.HashMap;

//example:
// yolo=> False
// rad=> True
//yOlo=>True

Character   Integer
_________  |________
 y  r      |  1  1
 o  a      |  2  1
 l  d      |  1  1
           |           
           |
           | 
boolean isUniqueChar(String str){
  if(str.length()>128) return false;

  boolean[] char_set = new boolean[128];
  for (int i=0; i < str.length(); i++){
    int val = str.charAt(i);
    if(char_set[val]) {  //Already found this  char in string
    return false;
  }
  char_set[val]=true;
} 
return true;
}

Time complexit: O(n) where n is length of the string 
Space comlexity: O(1)


class Solution {
  public int firstUniqChar(String s) {
      HashMap<Character, Integer> count = new HashMap<Character, Integer>();
      int n = s.length();
      for (int i = 0; i < n; i++) {

          char c = s.charAt(i);
          count.put(c, count.getOrDefault(c, 0) + 1);
      }

      for (int i = 0; i < n; i++) {

          if (count.get(s.charAt(i)) == 1)
              return i;

      }
      return -1;
  }
}
class Sslution{
  pblint firstUniqChar(String s){
    HashMap<Character, Integer> count = new HashMap<Character, Integer>();
    int n = s.length();
    for (int i = 0; i< n; i++){
      char c = s.charAt(i);
      count.put(c, count.getOrDefault(c, 0)+1);
    }
    for( int i =0,i< n; i++){
      if(count.get(s.charAt(i)) ==1){
      return i;
    }
    return -1;
  }
}