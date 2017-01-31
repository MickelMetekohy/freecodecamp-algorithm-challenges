/**
 * Smallest Common Multiple
 */

/**
 * Smallest Common Multiple
 *
 * @param Array
 * @return Number
 */
function smallestCommons(arr) {
  if(typeof(arr[0]) !== 'number') {return false;}
  if(typeof(arr[1]) !== 'number') {return false;}
  if(arr[0] === arr[1]) {return false;}
  
  arr.sort(function(a,b){
    return b - a;
  });
   
  var sequentials = [];
  for(var i = arr[0]; i >= arr[1]; i--) {
    sequentials.push(i);
  }
  
  var j;
  var k = 1;
  var lcm = 0;
      
  while(j !== sequentials.length) {
    lcm = sequentials[0] * k * sequentials[1];
    for(j = 2; j < sequentials.length; j++) {
      if(lcm % sequentials[j] !== 0) {
        break;
      }
    }
    k++;
  }
  return lcm;
}

smallestCommons([1, 5]) // 60.
smallestCommons([5, 1]) // 60.
smallestCommons([1, 13]) // 360360.
smallestCommons([23, 18]) // 6056820.
