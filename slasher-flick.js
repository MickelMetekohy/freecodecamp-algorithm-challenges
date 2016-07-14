/**
 * Slasher Flick
 */

/**
 * Slasher Flick
 *
 * @param Array
 * @param Number
 * @return Array
 */
function slasher(arr, howMany) {
    return arr.splice(howMany);
}

slasher([1, 2, 3], 2); //[3]
slasher([1, 2, 3], 0); //[1, 2, 3]
slasher([1, 2, 3], 4); //[]
