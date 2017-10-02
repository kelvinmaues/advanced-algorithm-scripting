function sym(args) {
  //create an array of arguments Objects
  args = [].slice.call(arguments);
  var arr = [];
  //console.log(args);
  var flattened = args.reduce(function(a, b) {
    return a.concat(b);
  }, []);
  console.log(flattened)

  function removeValue(value){
    var index = flattened.indexOf(value);
    console.log('Index', index, value)
    if(i != -1) {
	    flattened.splice(index, 1);
    }
  }
  
  for (var i = 0; i < flattened.length; i++) {
    var count = 0;
    for(var j = 0; j < flattened.length; j++) {
      if(flattened[i] == flattened[j]){
        count += 1;
      }
    }
    if(count == 1){
      arr.push(flattened[i])
    } else if(count == 3 && !arr.includes(flattened[i])){
      arr.push(flattened[i])
    }
  }
  console.log(arr);
  //return arr;
  
}
sym([1, 2, 3], [5, 2, 1, 4]);
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])
