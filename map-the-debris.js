/**
 * Map the Debris
 */

/**
 * Map the Debris
 *
 * @param Array
 * @return Array
 */
function orbitalPeriod(arr) {
  var GM = 398600.4418; // km3s-2
  var earthRadius = 6367.4447; // km
  var results = [];
  arr.map(function(cv){
    var ob =  Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + cv.avgAlt, 3) / GM));
    return results.push({ name : cv.name, orbitalPeriod : ob});
  });
  return results; //seconds
  // a     = earthradius + avgAlt = 6367.4447 + 35873.5553 = 42241 km
  // a3      = 75370704203521
  // agm     = pow(a,3) / GM      = 189088360.923941655299992
  // sqrtagm = sqrt(agm)          = 13750.940365078369988
  // ob      = sragm * 2 * pie    = 86399.706461763113149 seconds
  // ob      = round(ob)          = 86400 seconds
  // result  = [{name : arr[0].name, orbitalPeriod : 86400}];
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) // should return [{name: "sputnik", orbitalPeriod: 86400}].
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) // should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].
