import java.lang.reflect.Array;

class Solution {
  public boolean isOneBitCharacter(int[] bits) {
     int i=0;
      while ( i < bits.length-1) {
       i = (bits[i] == 1) ? i + 2 : i + 1 ;
      } 
      return i == bits.length - 1;
  }
}

var isOneBitCharacter = function(bits){
  let index = 0;
  let LastJump;
  while(index<bits.length){
    if(bits[index] ==0){
      lastJump=1
      index++
    }else{
      lastJump = 1
      index+=2
    }
  }
  return lastJump==1
}
// Javascript code


// var isOneBitCharacter = function(bits) {
//   if(bits.length === 1 || (bits.length > 1 && bits[bits.length-2] === 0)) return true;
  
//   let isOneBit;
//   for(let i = 0; i < bits.length; i++) {
      
//       if(bits[i] === 0) {
//               isOneBit = true;
          
//       }
//       if(bits[i] === 1) {
//               isOneBit = false;
//               i++;
//               if(i >= bits.length -1) break;
//       }
          
          
//   }
//   return isOneBit;
// };```
javascript


thoughts before coding:

If we itarate through from left -> right
-For Each of the bit 'b' at the index 'i'
  -If 'b' equal to 1
      -It must be 2 bits
          -Then we can move to index 'i+2'
  -Else, 'b' is equal to 0
       -It must be 1 bit
           -Then we can move to index 'i+1'
  -After performing the iteration
       -if our last indexs is at the end of the array
          -then it must be a 1 bit(0)

Pseudo code:
-Create a variable 'i to keep track of our current index
- while 'i' is less then the last index(bits.length-1)
    - If 'bits[i]' is equal to 1
      - Set 'i' to 'i + 2'
-Else
    -Set 'i' to 'i + 1'

-Return true if 'i' is at the last index of 'bits'
  -Else, return false

           
           
           