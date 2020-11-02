// 1
function countDown(num){
  if(num <= 0){
    console.log("All done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);

}
countDown(5)

// not recursion 
function countDown(num){
  for (var i = num; i > 0; i--){
    console.log(i);
  }
  console.log ("All done")
 
  }

countDown(5)

// 2
function sumRange(num){
  if (num ===1) return 1;
  return num + sumRange(num - 1);

}
sumRange(5) //= 15

// Factorial ! - not recursive way
function factorial(num){
  let total =1;
  for(let i = num; i > 0; i--){
    total *= i;
  }
  return total;
}

// Factorial ! - recursive way

function factorial(num){
  if (num ===1) return 1;
  return num * factorial(num -1);
}
//HELPER METHOD recursion
function outer(input){
  var outerScopeVariable = []
  function helper(helperInput){
    //modify the outerScopedVariable
    helper(helperInput--)
  }
  helper(input)
  return outerScopedVariable;
}
//Example
function collectOddValues (arr){
  let result =[]
  function helper (helperInput){
    if(helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0){
      result.push(helperInput[0])
    }
    helper(helperInput.slice(1))
  }
  helper(arr)
  
  return result;
}

//Pure Recursion
function collectOddValues(arr){
  let newArr = [];
  if(arr.length === 0){
    return newArr;
  }
  if(arr[0] % 2 !==0){
    newArr.push(arr[0]);
      }

      newArr = newArr.concat(collectOddValues(arr.slice(1)));
      return newArr;
}
//collectOddValues([1,2,3,4,5])Output: [1,3,5]
//POWER SOLUTION
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}
//FACTORIAL SOLUTION
function factorial(x){
   if (x < 0 ) return 0;
   if (x <= 1 ) return 1;
   return x * factorial(x-1);
}
//PRODUCT OF ARRAY SOLUTION
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}
//RECURSIVE RANGE SOLUTION
function recursiveRange(x){
   if (x === 0 ) return 0;
   return x + recursiveRange(x-1);
}
//FIBONACCI SOLUTION
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

