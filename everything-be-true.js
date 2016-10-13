/**
 * Everything Be True
 */

/**
 * Everything Be True
 *
 * @param Array
 * @param String
 * @return Bool
 */
function truthCheck(collection, pre) {
  for(var i = 0; i < collection.length; i++) {
    if(!collection[i].hasOwnProperty(pre) || !collection[i][pre]){
      return false;
    }
  }
  return true;
}

/**
 * Everything Be True
 *
 * @param Array
 * @param String
 * @return Bool
 */
function truthCheck(collection, pre) {
  return collection.every(function (element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}


truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); //true
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat"); //false
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat"); //true
truthCheck([{"single": "yes"}], "single"); //true
truthCheck([{"single": ""}, {"single": "double"}], "single"); //false