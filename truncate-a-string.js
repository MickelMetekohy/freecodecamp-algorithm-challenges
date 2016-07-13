/**
 * Truncate a string
 */

/**
 * Truncate a string
 *
 * @param String
 * @param Number
 * @return String
 */
function truncateString(str, num) {
    if (str.length <= num) {
        return str;
    }
    return (num <= 3) ? str.slice(0, num) + '...' : str.slice(0, num - 3) + '...';
}


/**
 * Truncate a string
 *
 * @param String
 * @param Number
 * @return String
 */
function truncateString(str, num) {
    if (str.length <= num) {
        return str;
    }
    return str.slice(0, num > 3 ? num-3 : num ) + '...';
}


truncateString("A-tisket a-tasket A green and yellow basket", 11); //"A-tisket..."
truncateString("A-", 1); //"A..."
