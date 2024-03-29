// Problem Statement
// Suppose we have coin denominations of [1, 2, 5] and the total amount is 7. 
// We can make changes in the following 6 ways:
// 1,1,1,1,1,1,1
// 1,1,1,1,1,2
// 1,1,1,2,2
// 1,2,2,2
// 1,1,5
// 2,5

class CoinChanging{
  static int solveCoinChange(int[] denominations, int amount) {
    int[] solution = new int[amount + 1]; 
    solution[0] = 1;
  
    for (int den: denominations) {
      for (int i = den; i < (amount + 1); ++i) {
        solution[i] += solution[i - den]; 
      }
    }
    return solution[solution.length - 1];
  }
  public static void main(String[] args) {

    int[] denominations = new int[] {1, 3, 5};
    int amount = 7;
    int result = solveCoinChange(denominations, amount); 
    System.out.print("SolveCoinChange(" + Arrays.toString(denominations) +  ", " + amount + ") = ");
    System.out.print(result);
  }
}  

// Suppose we have coin denominations of [1, 2, 5] and the total amount is 7. 
// We can make changes in the following 6 ways:
class CoinChanging{
  static int solveCoinChange(int[] denominations, int amount) {
    int[] solution = new int[amount + 1]; 
    solution[0] = 1;
  
    for (int den: denominations) {
      for (int i = den; i < (amount + 1); ++i) {
        solution[i] += solution[i - den]; 
      }
    }
    return solution[solution.length - 1];
  }
  public static void main(String[] args) {

    int[] denominations = new int[] {1, 3, 5};
    int amount = 7;
    int result = solveCoinChange(denominations, amount); 
    System.out.print("SolveCoinChange(" + Arrays.toString(denominations) +  ", " + amount + ") = ");
    System.out.print(result);
  }
}  