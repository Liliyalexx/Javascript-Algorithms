String sort(String s) {
  char[] content = s.toCharArray();
  java.util.Arrays.sort(content);
  return new String (content);
}
boolean permutation(String s, String t){
  if (s.length() != t.length())
  return false;
}
return sort(s).equals(sort(t));

/////////////////////////////////////////////////
public class Solution{
  public boolean checkInclusion(String s1, String s2) {
s1=sort(s1);
      for (int i=0; i <= s2.length() - s1.length(); i++){
          if(s1.equals(sort(s2.substring(i, i+s1.length()))))
              return true;
      }
      return false;
  }
  public String sort(String s) {
       char[] t = s.toCharArray();
       Arrays.sort(t);
      return new String(t);
  }
      
      
      }
///////////////////////////////////

boolean permutation(String s, String t){
  if( s.length< t.length) return false;
  int[]= new int[128];
  for ( int i = 0; i < s.length(); i++){
    letters[s.charAt(i)]++;
  }
  for (int i = 0; i < t.length(); i++){
    letters[t.charAt(i)]--;
    if(letters[t.charAt(i)]<0) {
      return false;
    }
  }
return true;
}
