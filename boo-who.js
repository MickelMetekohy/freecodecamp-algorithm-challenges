/**
 * Boo who
 */

/**
 * Boo who
 *
 * @param Bool
 * @return Bool
 */
function booWho(bool) {
  return typeof bool === 'boolean';
}
booWho(null); //false

booWho(true); //true
booWho(false); //true
booWho([1, 2, 3]); //false
booWho([].slice); //false
booWho({ "a": 1 }); //false