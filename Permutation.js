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

/////////////////////////////////////////////////////JAVA////////////////////////////////////////////
public boolean isPermutation(String s1, String s2) {
  if(s1.length() != s2.length()) return false; //cat 3 ch.== atc 3ch // cat!= ctak
  if(s1.length() == 0) return true; 

  char arr1[] = s1.toCharArray();
  char arr2[] = s2.toCharArray();
  Arrays.sort(arr1); // ["cat", "atc"]=['atc']  ['a,a,c,c,t,t']
  Arrays.sort(arr2);

  for(int i=0; i<arr1.length; i++) {
      if(arr1[i] != arr2[i]) return false;
  }

  return true;
}

public static void main(String[] args) {
  Main main = new Main();
  System.out.println(main.isPermutation("", "")); Nall
  System.out.println(main.isPermutation("a", "b")); false
  System.out.println(main.isPermutation("abab", "baba")); true 
}

