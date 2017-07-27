/**
 * Sorted Union
 */

/**
 * Sorted Union
 *
 * @param Array
 * @return Array
 */
function uniteUnique(arr) {
  var args = [].slice.call(arguments);
 
  arr = args.reduce(function(a, b){
    return a.concat(b);
  });

  arr = arr.reduce(function(c, d, i){
    if(Array.isArray(d)) {
      d[Symbol.isConcatSpreadable] = false;
    }
    return (c.indexOf(d) === -1) ? c.concat(d) : c;
  }, []);

  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]); // should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]); // should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]); // should return [1, 2, 3, 5, 4, 6, 7, 8].