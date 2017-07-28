/**
 * Sum All Primes
 */

/**
 * Prime ?
 *
 * @param Number
 * @return Number
 */
function prime(num) {
  for(var i = 2; i < num; i++) {
    if(num % i === 0) {return 0;}
  }
  return num;
}

/**
 * Sum All Primes
 *
 * @param Number
 * @return Number
 */
function sumPrimes(num) {
  var sum = 0;
  for(var i = 2; i <= num; i++) {
      sum += prime(i);
  }
  return sum;
}

sumPrimes(10) // should return a number.
sumPrimes(10) // should return 17.
sumPrimes(977) // should return 73156.