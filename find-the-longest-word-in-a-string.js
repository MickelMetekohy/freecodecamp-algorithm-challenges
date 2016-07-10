/**
 * Find the Longest Word in a String
 */

/**
 * Find the Longest Word in a String
 *
 * @param String
 * @return Number
 */
function findLongestWord(str) {
    return str.split(' ').sort(function(a, b) {
        if (a.length > b.length) {
            return -1;
        }
        if (a.length < b.length) {
            return 1;
        }
        return 0;
    }).slice(0, 1)[0].length;
}



/**
 * Find the Longest Word in a String
 *
 * @param String
 * @return Number
 */
function findLongestWord(str) {
    return str.split(' ').reduce(function(reducedValue, currentValue) {
        return Math.max(reducedValue, currentValue.length)
    }, 0);
}


/**
 * Find the Longest Word in a String
 *
 * @param String
 * @return Number
 */
function findLongestWord(str) {
    var s = str.split(' ');

    if(s.length === 1) {
      return s[0].length;
    }

    if(s[0] >= s[1]) {
      s.splice(1,1);
      return findLongestWord(s.join(' '));
    }

    if(s[0] <= s[1]) {
      s.splice(0,1);
      return findLongestWord(s.join(' '));
    }
}


findLongestWord("The quick brown fox jumped over the lazy dog"); //6
findLongestWord("May the force be with you"); //5
