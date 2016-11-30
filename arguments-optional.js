/**
 * Arguments Optional 
 */
function addTogether() {
  var args = [].slice.call(arguments);
  if(args.length === 1 && typeof(args[0]) == 'number') {
    var arg1 = args[0];
    return function second() {
      var argsSecond = [].slice.call(arguments);
      if(args.length > 0 && typeof(argsSecond[0]) == 'number') {
        return arg1 + argsSecond[0];
      }
    };
  } else if(args.length > 1 && typeof(args[0]) == 'number' && typeof(args[1]) == 'number') {
    return args[0] + args[1];
  } else {
    return undefined;
  }
}

addTogether(2, 3); //should return 5.
addTogether(2)(3); //should return 5.
addTogether("http://bit.ly/IqT6zt"); //should return undefined.
addTogether(2, "3"); //should return undefined.
addTogether(2)([3]); //should return undefined.