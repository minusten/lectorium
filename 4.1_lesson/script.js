let numbers = [2, 4, 5, 1, -1, 6, 9];

function myForEach(numbers){
  for(let i = 0; i < numbers.length; i++) {
    return numbers;
  }
}
console.log(myForEach(numbers))

function mySort(numbers){
    for(var i = 0 ; i <numbers.length; i++) {
        for(var j = i + 1; j < numbers.length; j++){
            if(numbers[i] > numbers[j]) {
                var swap = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = swap;
            }
        }
    }
return numbers;
}
console.log(mySort(numbers))

function myFilter(numbers){
  let even = [];
  for(let i = 0; i < numbers.length; i++) {
     if (numbers[i] % 2 === 0) even.push(numbers[i]);
  }
  return even
}
console.log(myFilter(numbers))

function myMap(numbers){
  let map = [];
  for(let i = 0; i < numbers.length; i++) {
      map[i] = numbers[i] + 5;
  }
  return map
}
console.log(myMap(numbers))
