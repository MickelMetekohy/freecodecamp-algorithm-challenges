/**
 * Pairwise
 */

/**
 * Pairwise
 *
 * @param Array
 * @param Number
 * @return Number
 */
function pairwise(arr, arg) {
  // if array is empty return 0
  if(!arr.length) {return 0;}

  //collect every key that was used
  var used = [];

  return arr.reduce(function(acc, val, i, a){
    // if used before skip
    if(used.indexOf(i) > -1) { return acc; }

    //loop throug the array and store the key
    //if val + a[j] == arg
    var match = 0;
    for(var j = 0; j < a.length; j++) {
      if(i == j) { continue; } //can't use the same index as reduce
      if(used.indexOf(j) > -1) { continue; } //can't be used before
      if(val + a[j] == arg){
        match = j; //we have a match, break the loop
        used.push(j); // add to used list
        break;
      }
    }

    //if a match was found
    if(match) {
      used.push(i);
      return acc + match + i;
    } else {
      return acc;
    }
  },0);
}

pairwise([1, 4, 2, 3, 0, 5], 7) // should return 11.
pairwise([1, 3, 2, 4], 4) // should return 1.
pairwise([1, 1, 1], 2) // should return 1.
pairwise([0, 0, 0, 0, 1, 1], 1) // should return 10.
pairwise([], 100) // should return 0.
