/**
 * Confirm the Ending
 */

/**
 * Confirm the Ending
 *
 * @param String
 * @param String
 * @return Bool
 */
 function confirmEnding(str, target) {
   return str.substr(str.length - target.length, target.length) === target;
 }


 /**
  * Confirm the Ending
  *
  * @param String
  * @param String
  * @return Bool
  */
  function confirmEnding(str, target) {
    return str.substr(-target.length) === target;
  }

 confirmEnding("Bastian", "n"); //true
 confirmEnding("He has to give me a new name", "name"); //true
 confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"); //false
