function sym(args) {
  //create an array of arguments Objects
  args = [].slice.call(arguments);
  //console.log(args)
  var previousArray;

  function logArrayElements(element, index) {
    var storeArr = [];
    // store the first array
    if(index === 0){
      previousArray = element;
    }
    // check if there is not values in both arrays
    // if true push to a previous array
    else if(index > 0){
      for(i = 0; i < element.length; i++){
        if(!previousArray.includes(element[i])){
          storeArr.push(element[i])
        }
      }
      for(i = 0; i < previousArray.length; i++){
        if(!element.includes(previousArray[i])){
          storeArr.push(previousArray[i])
        }
      }
      previousArray = storeArr;
    }
  }

  args.forEach(logArrayElements);
  //console.log(previousArray)
  // remove duplicated values
  var uniqueArray = previousArray.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
  })
  console.log(uniqueArray)
  return uniqueArray;
}
sym([1, 2, 3], [5, 2, 1, 4]);
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])
