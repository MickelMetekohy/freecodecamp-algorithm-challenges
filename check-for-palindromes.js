/**
 * Check for Palindromes
 *
 * A palindrome is a word or sentence that's spelled the same way both
 * forward and backward, ignoring punctuation, case, and spacing.
 */

/**
 * Check for Palindromes
 *
 * @param String
 * @return bool
 */
function palindrome(str) {
  var format = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  return (format === format.split('').reverse().join('')) ? true : false;
}


/**
 * Check for Palindromes
 *
 * @param String
 * @return bool
 */
function palindrome(str) {
  var format = str.replace(/[\W_]/gi, '').toLowerCase();
  return (format === format.split('').reverse().join('')) ? true : false;
}


palindrome("eye"); //true
palindrome("five|\_/|four"); //false
palindrome("0_0 (: /-\ :) 0-0"); //true
palindrome("1 eye for of 1 eye."); //false
palindrome("never odd or even"); //true
