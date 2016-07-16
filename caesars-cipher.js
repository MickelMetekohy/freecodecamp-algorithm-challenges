/**
 * Caesars Cipher
 */

/**
 * Caesars Cipher
 *
 * @param String
 * @return String
 */
function rot13(str) {
    return str.split('').map(function(val) {
        var cca = val.charCodeAt(0);
        if (cca < 65 || cca > 90) {
            return val;
        }
        if (cca >= 78) {
            return String.fromCharCode(val.charCodeAt(0) - 13);
        }
        return String.fromCharCode(val.charCodeAt(0) + 13);
    }).join('');
}



/**
 *Caesars Cipher
 *
 * @param String
 * @return String
 */
function rot13(str) { // LBH QVQ VG!
    return str.replace(/[A-Z]/g, (L) => String.fromCharCode(65 + (L.charCodeAt(0) - 65 + 13) % 26));
}



rot13("SERR PBQR PNZC"); //"FREE CODE CAMP"
rot13("SERR CVMMN!"); //"FREE PIZZA!"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."); //"THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
