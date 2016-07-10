/**
 * Title Case a Sentence
 */

/**
 * Title Case a Sentence
 *
 * @param String
 * @return String
 */
 function titleCase(str) {
   return str.toLowerCase().split(' ').map(function(val){
     return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
   }).join(' ');
 }



titleCase("I'm a little tea pot"); //"I'm A Little Tea Pot"
titleCase("sHoRt AnD sToUt"); //"Short And Stout"
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); //"Here Is My Handle Here Is My Spout"
