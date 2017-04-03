var solution = function(m){
  var totalVolume = function(n){
    var total = 0;
    for (var i = 1; i <= n; i++){
      total += Math.pow(i, 3);
    }
    return total;
  }
  var getUpperLimit = function(m){
    return 1 + Math.pow((1 + Math.pow(m, 1/3)), 1/2);
  }
  var upperLimit = getUpperLimit(m);
  console.log(upperLimit);
  for (var i = 0; i < upperLimit; i++){
    if (totalVolume(i) === m){
      return i;
    }
  }
  return -1;
}

var summation = function(n){
  var sum = 0;
  for (var i = 0; i <= n; i++){
    sum += n - i;
  }
  return sum;
}

var sumOfCubes = function(n){
  var sum = 0;
  for (var i = 0; i <= n; i++){
    sum += Math.pow(n - i, 3);
  }
  return sum;
}
