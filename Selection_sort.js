// Selection_Sort
function selectionSort(arr){
  for ( var i = 0; i < arr.length; i++){
    var lowest = i;
    for (var j = i + 1; j < arr.length; j++ ){
    
    if (arr[j] < arr[lowest]) {
    lowest = j;
    }
   }
   if (i !== lowest){
     console.log(i, lowest) ;  
   var temp = arr[i];
   arr[i] = arr[lowest];
   arr[lowest] = temp;
   console.log(arr)
   console.log("*******)")
   
  }
  return arr;
}

selectionSort([0, 2, 34, 22, 10, 19, 17]);
i, j, lowest
0, 1, 1
0, 2, 2
0, 3, 2
0, 4, 2


// Es2015 Selection_Sort
function selectionSort(arr){
    const swap = (arr, idx1, idx2){
      ([arr[idx1], arr[idx2]] = [arr[idx2], [idx1]]);
      for ( let i = 0; i < arr.length; i++){
      let lowest = i;
    for (let j = i + 1; j < arr.length; j++ ){
       let lowest = j;
    }
   }
   if (i !== lowest) swap (arr, i, lowest);
   }
  return arr;
}



Time complexity: O(n2)
Selection  sort better then Bubble sort 