// -----------------------ЗАДАНИЕ № 1--------------------

var arr =  [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8] 

  var currentEndMount = findCurrentEndMount(arr)
  var currentStartMount = arr[0], water = 0;
  for(var i = 1; i < currentEndMount; i++) {
    if (arr[i] > currentStartMount) {
      currentStartMount = arr[i]
    }
    else {
      water = (water + currentStartMount) - arr[i]
    }
  }
  currentStartMount = arr[arr.length - 1]
  for(var i = arr.length - 1; i> currentEndMount; i--) {
    if (arr[i] > currentStartMount) {
      current_max = arr[i];
    }
    else {
    water = (water + currentStartMount) - arr[i]
    }
  }
  console.log(water)


function findCurrentEndMount(arr) {
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
