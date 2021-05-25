import java.util.Scanner;
public class Urlify {
  static void replaceSpace(char [] str, int trueLength ){
    int spaceCount=0; index, i=0;
    for (i=0; i<trueLength; i++){
      if(str[i] ==' '){
        spaceCount++;
      }

    }
    index = trueLength + spaceCount *2;
  }

}





// @param {string} s

// @return {string}
// */
// var replaceSpaces = function(s) {
// return s.split('').reduce((acc,val,index)=>{
// if(/[0-9]/.test(val))
// acc += String.fromCharCode(s.charCodeAt(index-1) + parseInt(val));
// else
// acc += val;

//  return acc;
// },'');

// };



// ///////JAVA//////
// class Solution {
//   public String replaceDigits(String s) {
//       char[] ch=s.toCharArray();
//       for(int i=1;i<s.length();i+=2)
//           ch[i]=(char)(ch[i-1]+Character.getNumericValue(ch[i]));
//       return String.valueOf(ch);
//   }
// }




