//.sort works for Letters, but not with numbers.
// function numberCompare(num1, num2){
//   return num1-num2
// }
// [6, 4, 15, 10].sort(numberCompare)




function sort(arr){
  return arr
}
sort([23,45,66,12,14])
[6,12,13,23,45]

function numberCompare(num1, num2){
  return num1-num2;
}
[6,4,15,10].sort(numberCompare);
// [4,6,10,15]

function numberCompare(num1, num2){
  return num2-num1;
}
[6,4,15,10].sort(numberCompare);
//[15, 10, 6,4]

// BubbleSort - we compare every item and then swap and then compare to the next one throught the array, 
// then we repeat the process, we iterate again 

// [5,3,4,1,2]
// Es5
function swap(arr, idx1, idx2){
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
//ES2015
const swap = (arr, idx1, idx2) =>{
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

//Sorting_Bubble optimized with noSwaps (TIME COMPLEXITY O(n2))
  function bubbleSort(arr){
    var noSwaps;
   for (var i = arr.length; i > 0; i--){
     noSwaps = true
    for (var j = 0; j< i-1; j++){
      console.log(arr, arr[j], arr[j+1]);
      if (arr[j] > arr[j+1]){
      // SWAP!
      var temp = arr[j];
      arr[j] =arr[j+1];
      arr[j+1] = temp;
      noSwaps = false;

      }
      }
      if (noSwaps) break;
      }
      return arr;
      }

// Bubble Sortion ES 2015 version

      function bubbleSort(arr){
        const swap = (arr, idx1, idx2)=> {
          [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
        };
        for (let i = arr.length; i>0; i--){
          for (let j=0; j< i-1; j++){
            if (arr[j] > arr[j+1]){
              swap (arr, j, j+1);
            }
          }
  
        }
        return arr;
      }
 
bubbleSort([37, 45, 29, 8, 12, -1, 88]);
time Complexity best = O(n)
                average = O(n2)
                worst = O(n2)
 space complexity = O(1)               


