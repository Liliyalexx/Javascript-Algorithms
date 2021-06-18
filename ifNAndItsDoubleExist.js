/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var checkIfExist = function(arr) {
  if(!arr.length || arr.length === 1) return false;
for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
   if(arr.includes(arr[i] * 2) && arr[i] !== 0) return true;
   if(arr[i] === 0 && arr.indexOf(0) !== i) return true;
}
return false;
};

*****************************************
var checkIfExist = function(arr){
for(i=0; i<arr.length; i++){
   for(j=0; j<arr.length; j++){
       if(i !=j && arr[i]*2==arr[j])
           return true;
}
}
return false;
}
****************************************
var checkIfExist = function(arr){
TreeSet set =new TreeSet();
for(i=0; i<arr.length; i++){
if(set.contains(arr[i]*2) || arr[i] %2==0 && se.contains(arr[i]/2))
return true;
set.add(arr[i]);
}
return false;
};


****************************************
var checkIfExist = function(arr){
HashSet set =new HashSet();
for(i=0; i<arr.length; i++){
if(set.contains(arr[i]*2) || arr[i] %2==0 && se.contains(arr[i]/2))
return true;
set.add(arr[i]);
}
return false;
}