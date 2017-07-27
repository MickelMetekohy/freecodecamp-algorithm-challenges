/**
 * Spinal Tap Case
 */

/**
 * Spinal Tap Case
 *
 * @param str
 * @return str
 */
function spinalCase(str) {
  return str.split("").map(function(el, i, arr) {
     return (/[_ ]/g).test(el) ? '-' :
            ((/[A-Z]/g).test(el)&&(/[a-z]/g).test(arr[i-1])&&(arr[i-1])) ? '-' + el.toLowerCase() : el.toLowerCase(); 
  }).join("");
}

spinalCase("This Is Spinal Tap") // should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") // should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") // should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") // should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") // should return "all-the-small-things".