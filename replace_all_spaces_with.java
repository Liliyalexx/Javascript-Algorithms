import java.util.Scanner;
public class Urlify {
  static void replaceSpace(char [] str, int trueLength ){
    int spaceCount = 0; index, i = 0;
    for (i=0; i<trueLength; i++){
      if(str[i] ==' '){
        spaceCount++;
      }

    }
    index = trueLength + spaceCount *2;
    if (trueLength<str.length){
      str[trueLength] = '\0';
    }
    for(i=trueLength-1; i>=0; i--){
      if (str[i] == ' '){
        str[index - 1] ='0';
        str[index-2 ] ='2';
      str[index -3] = '%';
         }
         else {
           str[index -1] = str[i];
           index--;
         }
    }
    System.out.println(str);
  }
 String str = "Hi this is Pawan!";
 replaceSpace(str.toCharArray(), str.trim().length());
}



import CtCILibrary.AssortedMethods;

public class Question {
	// Assume string has sufficient free space at the end
	public static void replaceSpaces(char[] str, int trueLength) {
		int spaceCount = 0, index, i = 0;
		for (i = 0; i < trueLength; i++) {
			if (str[i] == ' ') {
				spaceCount++;
			}
		}
		index = trueLength + spaceCount * 2;
		if (trueLength < str.length) str[trueLength] = '\0';
		for (i = trueLength - 1; i >= 0; i--) {
			if (str[i] == ' ') {
				str[index - 1] = '0';
				str[index - 2] = '2';
				str[index - 3] = '%';
				index = index - 3;
			} else {
				str[index - 1] = str[i];
				index--;
			}
		}
	}
	
	public static int findLastCharacter(char[] str) {
		for (int i = str.length - 1; i >= 0; i--) {
			if (str[i] != ' ') {
				return i;
			}
		}
		return -1;
	}
	
	public static void main(String[] args) {
		String str = "Mr John Smith    ";
		char[] arr = str.toCharArray();
		int trueLength = findLastCharacter(arr) + 1;
		replaceSpaces(arr, trueLength);	
		System.out.println("\"" + AssortedMethods.charArrayToString(arr) + "\"");
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




