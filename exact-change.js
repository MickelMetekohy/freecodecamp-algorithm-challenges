/**
 * Exact Change
 */

/**
 * Exact Change
 *
 * @param Number price
 * @param Number cash
 * @param Array cid
 * @return
 */

function checkCashRegister(price, cash, cid) {
  // Here is your change, ma'am.
  const cidR = cid.reverse();

  // get total in drawer
  const cidTotal = cidR.reduce((a, b) => {return a + b[1];},0);
  // how much change
  let diff = cash - price;
  // currency
  const values = [100,20,10,5,1,0.25,0.1,0.05,0.01];

  // insufficient or broke
  if(cidTotal < diff) { return "Insufficient Funds"; }
  if(cidTotal === diff) { return "Closed"; }

  // do math
  let change = [];

  let math = values.map((val, i) => {
    if (val <= diff) {
      diff = Math.round(diff*100)/100;
      let valQuantity = cidR[i][1] / val;
      let remainder = diff%val;
      let times = Math.floor(diff/val);
      if(valQuantity != 0) {
        if(times <= valQuantity) {
          diff -= times*val;
          change.push([cidR[i][0], times*val]);
        } else if(val != 0.01) {
          diff -= valQuantity*val;
          change.push([cidR[i][0], valQuantity*val]);
        } else {
          change = "Insufficient Funds";
        }
      }
    }
  });
  return change;
}

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
