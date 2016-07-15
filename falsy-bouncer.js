/**
 * Falsy Bouncer
 */

/**
 * Falsy Bouncer
 *
 * @param Array
 * @return Aray
 */
function bouncer(arr) {
    return arr.filter(function(val) {
        return Boolean(val);
    });
}


/**
 * Falsy Bouncer
 *
 * @param Array
 * @return Array
 */
 function bouncer(arr) {
     return arr.filter(Boolean);
 }



 bouncer([7, "ate", "", false, 9]);//[7, "ate", 9].
 bouncer(["a", "b", "c"]);//["a", "b", "c"].
 bouncer([false, null, 0, NaN, undefined, ""]);//[].
 bouncer([1, null, NaN, 2, undefined]);//[1, 2]
