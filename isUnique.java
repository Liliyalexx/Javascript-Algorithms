//example:
// yolo=> False
// rad=> True
//yOlo=>True

boolean isUniqueChar(String str){
  if(str.length()>128) return false;

  boolean[] char_set = new boolean[128];
  for (int i=0; i < str.length(); i++){
    int val = str.charAt(i);
    if(char_set[val]){ //Already found this  char in string
    return false;
  }
  char_set[val]=true;
} 
return true;
}

Time complexit: O(n) where n is length o the string 
Space comlexity: O(1)