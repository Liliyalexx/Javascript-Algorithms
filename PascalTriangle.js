// 1
// 11
// 121
// 1331
// 14641
// 15101051
// 5C2 = 10
// 4C3 = 4
// Number of combinations

// Pascals triangle solution 
var numRows = 6;
function pascals(numRows) {
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];
    let result = [];
    [[],[],[],[],[]]
    for (let row = 1; row <= numRows; row++) { //iterates through each array within the outer array (each inner array is a row)
        let arr = [];
        //console.log('this is row: ' + row);
        for (let col = 0; col < row; col++) { //adds values to each inner array within the outer array()
            if (col === 0 || col === row - 1) {
                console.log('in inner if statement')
                arr.push(1);
            } else {
                console.log('this is row: ' + row)
                console.log("this is first half of result: " +  result[row-2][col-1])
                console.log("this is last half of result: " + result[row-2][col])
                arr.push((result[row-2][col-1] + result[row-2][col]));
                //result[1-2][1-1] +  result[1-2][1];
                //result[-1][0] +  result[-1][1]
            }
        }
        result.push(arr);
        //console.log('this is result: ' + result)
    }
    return result;
}
console.log(pascals(numRows));