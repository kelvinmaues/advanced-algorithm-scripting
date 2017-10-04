function checkCashRegister(price, cash, cid) {
  // Currency values
  var changeArr = [];
  
  var denom = [
    { name: 'ONE HUNDRED', val: 100.00},
    { name: 'TWENTY', val: 20.00},
    { name: 'TEN', val: 10.00},
    { name: 'FIVE', val: 5.00},
    { name: 'ONE', val: 1.00},
    { name: 'QUARTER', val: 0.25},
    { name: 'DIME', val: 0.10},
    { name: 'NICKEL', val: 0.05},
    { name: 'PENNY', val: 0.01}
  ];
  
  var change = cash - price;
  cid = cid.reverse();
  for(var i = 0; i < denom.length; i++){
    //console.log(denom[i])
    if(change >= denom[i].val) {
      console.log(denom[i].name)
      for(j = i; j < cid.length; j++){
        console.log(cid[j])
        if(cid[j][0] === denom[i].name){
          if(cid[j][1] > denom[i].val){
            changeArr.push(denom[i].val)
            
          }
        }
      }
    }
  }
  console.log(changeArr)
  
  // Here is your change, ma'am.
  //return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

/*checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);*/
