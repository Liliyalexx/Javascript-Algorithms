// DYNAMIC PROGRAMMING
// "A method for solving a complex problem by breaking it down into a collection of simpler 
// subproblems, solving each of those subproblems just once, 
// and storing their solutions."

Fib(n) = Fib(n-1) + Fib(n-2)
Fib(2) is 1
Fib(1) is 1
function fib(n){
  if(n<=2) return 1;
  return fib(n-1) + fib(n-2);
}
Complexity: Object(2)^n

// Memoization 1)
// Storing the results of expensive function calls and returning the cached(pro zapas) result 
// when the same inputs occur again

function fib_memo(n, memo=[]){ //Memo-ized solution
  if(memo[n] !==undefined) return memo[n]
  if(n<=2) return 1;
  var res = fib(n-1, memo) + fib (n-2, memo);
  memo[n] = res;
  return res;
}
// Big O(N) Linear time

// Memoization - Tabulation  2)

function fib_table(n){
if(n <= 2) return 1;
var fibNums = [0,1,1];
for (var i = 3; i <=n; i++){
  fibNums[i] = fibNums[i-1] + fibNums[i-2];
}
return fibNums[n];
}
// O(N)