// var arr = [-1, 3, 5, 7, -4, 0]
// var arr = [0, 4, -8, undefined, 3, 5, NaN]

function max(arr){
  var max = arr[0]
  for (var i = 0; i < arr.length; i++){
    if (arr[i] > max) max = arr[i]
  }
  return max
}
console.log(max([-1, 3, 5, 7, -4, 0]))
console.log(max([0, 4, -8, undefined, 3, 5, NaN]));

function min(arr){
  var min = arr[0]
  for (var i = 0; i < arr.length; i++){
      if (arr[i] < min) min = arr[i]
  }
  return min
}
console.log(min([-1, 3, 5, 7, -4, 0]))
console.log(min([0, 4, -8, undefined, 3, 5, NaN]));

function sum(arr){
  var sum = 0
  for (var i = 0; i < arr.length; i++){
    if (typeof arr[i] === 'undefined' || isNaN(arr[i])){
      continue;
    }
    sum = sum + arr[i]
  }
  return sum
}
console.log(sum([-1, 3, 5, 7, -4, 0]))
console.log(sum([0, 4, -8, undefined, 3, 5, NaN]));
