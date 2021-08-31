class Solution {
  public List<String> generateParenthesis(int n) {
    List<String> output_arr = new ArrayList();
    backtrack(output_arr, "", 0, 0, n);
    return output_arr;
  }

  public void backtrack(List<String> output_arr, String current_string, int open, int close, int max) {
    if (current_string.length() == max * 2) { // some base case
      output_arr.add(current_string);
      return;
    }
    if (open < max)
      backtrack(output_arr, current_string + "(", open + 1, close, max);
    if (close < open)
      backtrack(output_arr, current_string + ")", open, close + 1, max);
  }
}

//problem test case n=2

current = "";
[];
n = 2;
max = 2;
open = 0;
close = 0;

if (open < max)// if (0< 2) recursive call

//inside recursive call below
current = "(";
[];
n=2;
max = 2;
open = 1;
close=0;
if (open < max)// if (1<2) recursive call
//inside recursive call below
current = "(("
[];

n=2;
max=2;
open =2;
close = 0;
if(open< max); //if(2<2)  FALSE;

if(close < open); //if(0 <1) recursive call;

// inside recursive call below

current = "()";
[];

n=2;
max=2;

open = 1;
close=1;
if(open<max)// if (1< 2) recursive call;
//inside recursive call below
current="()(";
[];
n=2;
max=2;

open =2;
close=1;

if(open < max )// if (2<2) False;
if (close < open); //if (1<2) recursive call;
//inside recursive call below 
current = "()()";
[];
n=2;
max=2;
open =2;
close =2;

if(close< open); //FALSE;


/////////////////////////////////////////////////////////
class AllBraces{
  static void print(ArrayList<ArrayList<Character>> arr) {
    for (int i = 0; i < arr.size(); i++) {
      System.out.println(arr.get(i).toString());
    }
  }

  static void printAllBacesRec(int n, int leftCount,int rightCount, ArrayList<Character> output,ArrayList<ArrayList<Character>> result) {

    if (leftCount >= n && rightCount >=n) {
      result.add((ArrayList)output.clone());
    }

    if (leftCount < n) {
      output.add('{');
      printAllBacesRec(n, leftCount + 1, rightCount, output, result);
      output.remove(output.size() - 1);
    }

    if (rightCount < leftCount) {
      output.add('}');
      printAllBacesRec(n, leftCount, rightCount + 1, output, result);
      output.remove(output.size() - 1);
    }
  }

  static ArrayList<ArrayList<Character>> printAllBraces(int n) {
    ArrayList<ArrayList<Character>> result = new ArrayList<ArrayList<Character>>();
    ArrayList<Character> output = new ArrayList<Character>();
    printAllBacesRec(n, 0, 0, output, result);
    return result;
  }
  
  public static void main(String[] args) {
    ArrayList<ArrayList<Character>> result = new ArrayList<ArrayList<Character>>();
    result =  printAllBraces(3);
    print (result);
  }
}  
