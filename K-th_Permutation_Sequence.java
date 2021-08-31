// First case: REcursion -> |  =  | -> sort
//                |   // data structure[k-1]
//                |
//                n!*n (Factorial)

// Optimal Solution

// n = 4, K=17 = 16 th permutations
// n! = 24,  4! = 24
// {1, 2, 3, 4} 
//  0  1  2  3 - indexes


//       3! (second index)
// 1 + (2, 3, 4) | 6   (0-5) permutations
// 2 + (1, 3, 4) | 6   (6-11) permutations
// 3 + (1, 2, 4) | 6   (12-17) permutations
// 16/6 =2
// 16%6 = 4
// {1,2,4}, k=4
// permutations with {1,2,4}   3! = 6
// 0  1 {2, 3} |2  (0-1)
// 1  2 {1, 4} |2  (2-3)
// 2  4 {1, 2} |2  (4-5)
//           _____
//              6
// 4 + (1, 2, 3) | 6   (18-23) permutations
//             ________
//                24

// permutation: 3 4 1 2

// k=4/2 = 2  4%2 = 0 
// {1, 2} k = 0/1=0  2! = 2 

// permutation: 
// 1 + {2} |1  (0-0)  Permutation should start from 1 
// 2 + {1} |1  (1-1)
//          _____ 
 //            2

//  {2} k=0
// permutation:
//  2+ { }

// The answer permutation: 3 4 1 2

// Time complexity -> O(n) x O(n) = O(n2)
// Space Complexity:O(n)

// Solution

class Solution{
  public String getPermutation(int n, int k){
    int fact = 1;
    List<Integer> numbers = new ArrayList<>();
    for(int i = 0; i<n; i++){
      fact = fact*i;
      numbers.add(i);
    }
    numbers.add(n);
    String ans = " ";
    k=k-1;
    while(true){
      ans = ans + numbers.get(k/fact);
      numbers.remove(k/fact);
      if(numbers.size() ==0){
        break;
      }

      k=k%fact;
      fact = fact/numbers.size();
           
  }
  return ans;
}
}