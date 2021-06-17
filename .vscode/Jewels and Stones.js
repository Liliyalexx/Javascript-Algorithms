`/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
let count = 0;
let jewlen=jewels.length;
let stolen=stones.length;
    for (let i = 0; i < jewlen; i++){
        for (let j =0 ; j< stolen; j++){ 
             if(jewels[i] === stones[j])
                 count++;
        }
    }
return count; 
};``