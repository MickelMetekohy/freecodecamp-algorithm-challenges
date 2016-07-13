/**
 * Chunky Monkey
 */

/**
 * Chunky Monkey
 *
 * @param Array
 * @param Number
 * @return Array
 */
function chunkArrayInGroups(arr, size) {
    var a = [];
    for (var i = 0; i < arr.length; i += size) {
        a.push(arr.slice(i, size + i));
    }
    return a;
}


chunkArrayInGroups(["a", "b", "c", "d"], 2); //[["a", "b"], ["c", "d"]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2); //[[0, 1], [2, 3], [4, 5], [6, 7], [8]]
