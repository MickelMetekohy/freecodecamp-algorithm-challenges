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
    var index = arr.sort((curr, next) => curr > next)
        .findIndex((currNum) => num <= currNum);
    return index === -1 ? arr.length : index;
}



getIndexToIns([10, 20, 30, 40, 50], 35); // 3.
getIndexToIns([10, 20, 30, 40, 50], 30); // 2.
getIndexToIns([40, 60], 50); // 1.
getIndexToIns([3, 10, 5], 3); // 0.
getIndexToIns([5, 3, 20, 3], 5); // 2.
getIndexToIns([2, 20, 10], 19); // 2
