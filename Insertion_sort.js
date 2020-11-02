function insertionSort(arr){
  for ( var i = 1; i < arr.length; i++){
    var currentVal = arr[i];
    for(var j = i-1; j >= 0 && arr[j] > currentVal;  j--){
      arr[j+1] = arr[j]
    }
  arr[j+1] = currentVal;
 console.log(arr)
  }
 return arr
 
}

insertionSort([2, 5, 4, 7, 3, 0])

Time Complexity: O(n2)
Space Complexity O(1)