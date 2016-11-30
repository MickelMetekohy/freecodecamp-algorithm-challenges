/**
 * Steamroller
 */
function steamrollArray(arr) {
  var result = [];
  var roll = function(arr) {
    arr.map(function(i){
      return Array.isArray(i) ? roll(i) : result.push(i);  
    });
  };
  roll(arr);
  return result;
}

steamrollArray([[["a"]], [["b"]]]); //should return ["a", "b"]
steamrollArray([1, [2], [3, [[4]]]]); //should return [1, 2, 3, 4]
steamrollArray([1, [], [3, [[4]]]]); //should return [1, 3, 4]
steamrollArray([1, {}, [3, [[4]]]]); //should return [1, {}, 3, 4]
