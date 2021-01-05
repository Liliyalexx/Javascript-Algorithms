// * @param {number[]} rec1
// * @param {number[]} rec2
// * @return {boolean}
[x1, y1, x2, y2];
[x1, y1, x2, y2];

// x-axis: 0,2
// y-axis: 1,3
// left1 < right2 && left2 < right1
// return for x-axis


y      ____________(3,3)
|      |          | 
|      |          |
|______|___ (2,2) |
|      |__|_______|
|   (1,1) |
|         |
|_________|____________
0(0,0)                 x


case 1: 
left1________________right1

      left2________________right2

1. left1 < x < right 1 && left2 < x < right2
2. left1 < x < right2 && left2 < x < right1
3. left1 < right2 && left2 < right1

case 2:

  left1________________right1

                          left2________________right2
1. left1 < x < right1 && left2 < x < right2
2. left1 < x < right2 && left2 < x < right1
3.

var isRectangleOverlap = function(rec1, rec2) {
  // check if gap been most left and least right
  let left = Math.max(rec1[0], rec2[0])
  let right = Math.min(rec1[2], rec2[2])
  
  // check if gap been largest min (Y) and smallest max (Y)
  let bottom = Math.max(rec1[1], rec2[1])
  let top = Math.min(rec1[3], rec2[3])
  
  return (left < right && bottom < top)
};