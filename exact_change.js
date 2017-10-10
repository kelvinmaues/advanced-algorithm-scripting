function checkCashRegister(price, cash, cid) {
  // Currency values
  var change = cash - price;

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

  var cidReversed = cid.reverse();

  function isBigEnough(value) {
    for(var i = 0; i < denom.length; i++){
      //console.log(denom[i])
      if(change > denom[i].val && value[0] == denom[i].name ) {
        return value[0];
      }
    }
  }
  var filteredCID = cidReversed.filter(isBigEnough);

  // know the value of each currency type in the register
  function checkDenom(denomName){
    for(var i = 0; i < denom.length; i++){
      if(denom[i].name === denomName) {
        return denom[i].val;
      }
    }
  }

  /*
  function calculateChange(){
    var changeArr = [];
    console.log(filteredCID)
    for(var i = 0, count= 0; i < filteredCID.length; i++){
      var denomValue = checkDenom(filteredCID[i][0]);
      //console.log(filteredCID[i][0])
      var cidValue = filteredCID[i][1]
      //console.log(cidValue, count)
      while (cidValue >= denomValue && count !== change) {
        cidValue -= denomValue;
        count += denomValue;
        //console.log('Values', cidValue, count);
        //changeArr.push([filteredCID[i][0], denomValue]);
      }
    }
    return changeArr;
  }
  */
  var count = 0;
  var changeArr = [];
  function calculateChange(){
    //console.log('Change', change)
    //console.log('CID', filteredCID)
    for(var i = 0; i < filteredCID.length; i++) {
      var denomValue = checkDenom(filteredCID[i][0]);
      var value = filteredCID[i][1];
      //console.log('denomValue', denomValue)
      //console.log(filteredCID[i])
        while(value > 0 && change >= denomValue) {
          //console.log('Change', change, 'Count', count, 'Value', value)
          //change -= denomValue;
          change -= denomValue;
          value -= denomValue;
          count += denomValue;

        }
      //console.log(count, value)
      if(count) {
        changeArr.push([filteredCID[i][0], count])
      }
    }
    console.log(changeArr)
  }

  var totalSum = 0;
  for(var i = 0; i < filteredCID.length; i++){
    totalSum += filteredCID[i][1];
  }
  if(totalSum < change){
    return "Insufficient Funds"
  } else if (totalSum === change){
    return "Closed";
  } else {
    return calculateChange();
  }

}

/*
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])*/
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])
