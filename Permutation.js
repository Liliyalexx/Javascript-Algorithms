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




// /////////////////////////////////////////////////////////Java/////////////////////////////////////
// 1) Process the 1st str input and store the info about it in a hashmap
//    1.1) The Hashmap will have key which will be the char and the value is how many time it ocurred in the string
// 2)Process the snd str
// 2.1) as we go through each char if the char is found in the hashmap we are going to decrement its ocurrence by 1
// 2.2) if we do not find a char that appears in the hashmap then we are going to return  false for the  entire method
// 2.3) if value is less than 1 then we return false

Public classs CheckPermutation{
  public bollean check( String str1, String str2){
      if(str1.length()!=str2.length()) return false;
Map<Character, Integer> map =new HashMAp<>(); // map used for storing str1's ocurrence in char 
//process the first str1
for(int 1=0; i<str1.length; i++){                                  //cat    
  if(map.containsKey(str1.charAt(i))){
      map.put(str1.charAt(i)), map.get(str1.charAt(i)+1);
  }
  else{
      map.put(str1.charAt(i), 1) //, <act, atc>
  }
}
for(int 1=0; i<str2.length; i++){
  if(map.containsKey(str2.charAt(i))){
      if(map.get(str2.chatAt(i))>0){
      map.put(str2.charAt(i)), map.get(str2.charAt(i)+1);  <
      }
      else{
          return false;
      }
  }
  else{
      return false;
  }
}
return true;

  }
  public static void  main(String[] args){
System.out.println(CheckPermutation.check("abc", "bca")); true 
  }
}

