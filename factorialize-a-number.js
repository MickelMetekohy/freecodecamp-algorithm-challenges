/**
 * Factorial
 *
 * The product of all positive numbers less then or equal to n.
 */

/**
 * Factorialize a Number
 */
function factorialize(num) {
  var result = 1;
  for(var i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
factorialize(5);



/**
 * Factorialize a Number
 *
 * Recursive
 */
function factorializeRecursive(num) {
  if( num === 0 ) { return 1; }
  return num * factorializeRecursive(num -1);
}
factorializeRecursive(5);
