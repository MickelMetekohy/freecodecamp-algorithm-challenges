/**
 * Diff Two Arrays
 */

/**
 * Diff Two Arrays
 *
 * @param Array
 * @param Array
 * @return Array
 */

 function diffArray(arr1, arr2) {
   var newArr = arr1.concat(arr2).sort();
   var result = [];
   for(var i=0; i<newArr.length; i++) {
     if(newArr[i] === newArr[i+1]) {
       i+=1;
     } else {
       result.push(newArr[i]);
     }
   }
   return result;
 }

 diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]); // ["pink wool"]
 diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]); // []
 diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // [4]
