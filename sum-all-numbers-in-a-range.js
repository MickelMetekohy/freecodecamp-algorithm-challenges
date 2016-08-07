/**
 * Sum All Numbers in a Range
 */

/**
 * Sum All Numbers in a Range
 *
 * @param Array
 * @return Number
 */
function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var sum = 0;
    for (var i = min; i <= max; i++) {
        sum = sum + i;
    }
    return sum;
}

/**
 * Sum All Numbers in a Range
 *
 * @param Array
 * @return Number
 */
function sumAll(arr) {
    return (Math.abs(arr[0] - arr[1]) + 1) * (arr[0] + arr[1]) / 2;
}

sumAll([1, 4]); //10
sumAll([4, 1]); //10
sumAll([5, 10]); //45
sumAll([10, 5]); //45
