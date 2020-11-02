function search(arr, val{
  for (let i=0; i<arr.length; i++){
    if (arr.[i] === val){
      return i
    }
  }
}

// Binary search
function serach(arr, val){
  let min = 0;
  let max = arr.length - 1;
  while(min <= max) {
    let middle = math.floor((min + max) /2);
    let currentElement = array[middle];

    if (array[middle] < val) {
      min = middle +1;
    }
    else if (array[middle] > val){
      max = middle - 1;
    }
    else {
      return middle;
    }
  }
  return -1;
}