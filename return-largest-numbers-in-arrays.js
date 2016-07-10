/**
 * Return Largest Numbers in Arrays
 */

/**
 * Return Largest Numbers in Arrays
 *
 * @param String
 * @return Array
 */
function largestOfFour(arr) {
    return arr.map(function(val) {
        return val.reduce(function(rv, cv) {
            return Math.max(rv, cv);
        });
    });
}


largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]); //[9, 35, 97, 1000000]
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]); //[27,5,39,1001]
