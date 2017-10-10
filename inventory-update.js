/**
 * Inventory Update
 */

/**
 * Inventory Update
 *
 * @param Array arr1 current inventory
 * @param Array arr2 to update inventory
 * @return Array with updated inventory
 */
function updateInventory(arr1, arr2) {
    // helper function to sort the inventory
    const compare = function(a,b) {
      const x = a[1].toLowerCase();
      const z = b[1].toLowerCase();
      if (x < z) {return -1;}
      if (x > z) {return 1;}
      return 0;
    };

    // constants to collect values during mapping
    const newCount = [];
    const newItem = [];

    // merge both params in to one array
    const all = arr1.concat(arr2);

    // map over all items, filter out undefined ones and reduce to 2D array
    const inventory = all
      .map((cv, ci) => {
        if(newItem.indexOf(cv[1]) != -1) {
          newCount[newItem.indexOf(cv[1])] += cv[0];
        } else {
          newCount.push(cv[0]);
          newItem.push(cv[1]);
          return 1;
        }
      })
      .filter(items => items)
      .reduce((ac, cv, ci) => {
        ac.push([newCount[ci],newItem[ci]]);
        return ac;
      },[]);

    // return sorted inventory
    return inventory.sort(compare);
}


updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]); // should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []); // should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]

updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]); // should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]
