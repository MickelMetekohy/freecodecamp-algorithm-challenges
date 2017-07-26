/**
 * Pig Latin
 */

/**
 * Pig Latin
 *
 * @param str
 * @return str
 */
function translatePigLatin(str) {
  var arr = str.split("");
  if(['a', 'e', 'i', 'o', 'u'].indexOf(arr[0]) >= 0) { return str + 'way'; }
  var consonantCluster = [],
      i = 0;
  while(['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z',].indexOf(arr[i]) >= 0) {
    consonantCluster.push(arr[i]);
    i++;
  }
  return str.substr(consonantCluster.length) + consonantCluster.join("") + 'ay';
}

translatePigLatin("california") // should return "aliforniacay".
translatePigLatin("paragraphs") // should return "aragraphspay".
translatePigLatin("glove") // should return "oveglay".
translatePigLatin("algorithm") // should return "algorithmway".
translatePigLatin("eight") // should return "eightway".