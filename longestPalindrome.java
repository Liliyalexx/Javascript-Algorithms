class Solution {
  public String longestPalindrome(String s) {
      
      int max = 1, index = 0;
      char [] ch = s.toCharArray();
      int len = s.length();
      for(int i = 0, j; i<len/2+1; i++){
          
          // check for odd palindromes
          j = 1;
          while((i-j >= 0 && i+j < len) && ch[i-j] == ch[i+j]){
              if((j<<1)+1 > max){
                  max = (j<<1)+1;
                  index = i;
              }
              j++;
          }
          
          // check for even palindromes
          j=1;
          while((i-j+1 >= 0 && i+j < len) && ch[i-j+1] == ch[i+j]){
              if(j<<1 > max){
                  max = j<<1;
                  index = i;
              }
              j++;
          }
      }
      
      if(max < len/2+1){
          for(int i = len/2+1, j; i<len; i++){
          
              // check for odd palindromes
              j = 1;
              while((i-j >= 0 && i+j < len) && ch[i-j] == ch[i+j]){
                  if((j<<1)+1 > max){
                      max = (j<<1)+1;
                      index = i;
                  }
                  j++;
              }

              // check for even palindromes
              j=1;
              while((i-j+1 >= 0 && i+j < len) && ch[i-j+1] == ch[i+j]){
                  if(j<<1 > max){
                      max = j<<1;
                      index = i;
                  }
                  j++;
              }
          }
      }
      
      // build and return the palindrome
      return s.substring(index-(max>>1)+1-max%2, index+(max>>1)+1);
  }
}