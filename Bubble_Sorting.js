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

// BubbleSort

// [5,3,4,1,2]
function swap(arr, idx1, idx2){
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
const swap = (arr, idx1, idx2) =>{
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

//Sorting_Bubble optimized with no noSwaps (TIME COMPLEXITY O(n2))
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
          for let (j=0; j< i-1; j++){
            if (arr[j] > arr[j+1]){
              swap (arr, j, j+1);
            }
          }
        }
        return arr;
      }
 
bubbleSort([37, 45, 29, 8]);

