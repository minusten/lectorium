// -----------------------ЗАДАНИЕ № 1--------------------

var arr =  [2, 2, 2, 2, 2]
  var maxLastInd = findMaxLastInd(arr)
  var currentMax = arr[0], water = 0
  for(var i = 1; i < maxLastInd; i++) {
    if (arr[i] > currentMax) {
      currentMax = arr[i]
    }
    else {
      water = (water + currentMax) - arr[i]
    }
  }
  currentMax = arr[arr.length - 1]
  for(var i = arr.length - 1; i > maxLastInd; i--) {
    if (arr[i] > currentMax) {
      currentMax = arr[i]
    }
    else {
      water = (water + currentMax) - arr[i]
    }
  }
  console.log(water)


  function findMaxLastInd(arr) {
    return arr.reduce(function(sum, currentValue, currentIndex, arr) {
      if (currentValue >= arr[sum]) {
      return currentIndex
    } else {
      return sum
    }
    })
  }
// --------------------ЗАДАНИЕ № 2--------------------
﻿var arr = ['Новый', 'Год', 'будет', 31, 'января']
function convertFromArrToObj (arr, obj) {
  arr.forEach(function(item, i) {
    obj[i] = item
  })
  return obj
}
console.log(convertFromArrToObj(arr, {}))
