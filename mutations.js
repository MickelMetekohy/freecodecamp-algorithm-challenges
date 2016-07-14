/**
 * Mutations
 */

/**
 * Mutations
 *
 * @param Array
 * @return Bool
 */
function mutation(arr) {
    return arr[1].toLowerCase().split('').map(function(val) {
        return arr[0].toLowerCase().indexOf(val) !== -1;
    }).reduce(function(nv, cv) {
        return nv * cv++ !== 0;
    }, 1);
}


/**
 * Mutations
 *
 * @param Array
 * @return Bool
 */
function mutation(arr) {
    return arr[1].toLowerCase()
        .split('')
        .every(function(letter) {
            return arr[0].toLowerCase()
                .indexOf(letter) != -1;
        });
}



mutation(["hello", "neo"]); //false
mutation(["hello", "Hello"]); //true
