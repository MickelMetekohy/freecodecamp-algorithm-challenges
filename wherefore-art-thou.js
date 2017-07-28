/**
 * Wherefore art thou
 */

/**
 * Wherefore art thou
 *
 * @param Array
 * @param Object
 * @return Array
 */
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  function match(col) {    
    for(var key in source) {
      if(col[key] !== source[key]) {
         return false;
      }
    }
    return true;
  }
  for(var i = 0; i < collection.length; i++) {
    if(match(collection[i])) {
      arr.push(collection[i]);
    }
  }
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) // should return [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) // should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) // should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) // should return [{ "a": 1, "b": 2, "c": 2 }].