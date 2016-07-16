/**
 * Where do I belong
 */

/**
 * Where do I belong
 *
 * @param Array
 * @param Number
 * @return Number
 */
function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {
        return a - b;
    });
    for (var i = 0; i < arr.length; i++) {
        if (num <= arr[i]) {
            return i;
        }
    }
    return arr.length;
}
getIndexToIns([2, 5, 10], 15);


/**
 * Where do I belong
 *
 * @param Array
 * @param Number
 * @return Number
 */
 function getIndexToIns(arr, num) {
   // sort and find right index
   var index = arr.sort((curr, next) => curr > next)
     .findIndex((currNum)=> num <= currNum);
   // Returns proper answer
   return index === -1 ? arr.length : index;
 }
