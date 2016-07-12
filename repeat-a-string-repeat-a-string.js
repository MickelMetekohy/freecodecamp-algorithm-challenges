/**
 * Repeat a string repeat a string
 */

/**
 * Repeat a string repeat a string
 *
 * @param String
 * @param Number
 * @return String
 */
function repeatStringNumTimes(str, num) {
    return (num >= 0) ? str.repeat(num) : '';
}




/**
 * Repeat a string repeat a string
 *
 * @param String
 * @param Number
 * @return String
 */
function repeatStringNumTimes(str, num) {
    if (num <= 0) {
        return '';
    }
    if (num === 1) {
        return str;
    }
    return str + repeatStringNumTimes(str, num - 1);
}

repeatStringNumTimes("abc", 3); //"abcabcabc"
repeatStringNumTimes("*", 8); //"********"
