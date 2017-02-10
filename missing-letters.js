/**
 * Missing letters
 */

/**
 * Missing letters
 *
 * @param str
 * @return str || undefined
 */
function fearNotLetter(str) {
  var arr = str.split("").reverse().map(function(el){
    return el.charCodeAt(0);
  });
  
  for(var i = 0; i < arr.length; i++) {
    if(i === arr.length-1) { return undefined; }
    if(arr[i] - arr[i+1] != 1) { return String.fromCharCode(arr[i]-1); }
  }
}

fearNotLetter("abce"); // should return "d".
fearNotLetter("abcdefghjklmno"); // should return "i".
fearNotLetter("bcd"); // should return undefined.
fearNotLetter("yz"); // should return undefined.