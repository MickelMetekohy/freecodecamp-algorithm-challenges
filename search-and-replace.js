/**
 * Search and Replace
 */

/**
 * Search and Replace
 *
 * @param str
 * @param str
 * @param str
 * @return str
 */
function myReplace(str, before, after) {
  return str.replace(before, ((/^[A-Z]/).test(before) ? (after.charAt(0).toUpperCase() + after.slice(1)) : after));
}

myReplace("Let us go to the store", "store", "mall") // should return "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") // should return "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling") // should return "This has a spelling error".
myReplace("His name is Tom", "Tom", "john") // should return "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms") // should return "Let us get back to more Algorithms".