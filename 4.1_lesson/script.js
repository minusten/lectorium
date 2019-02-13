Array.prototype.myForEach = function (func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i])
  }
}
new Array(2, 4, 5, 1, -1, 6, 9).myForEach(num => console.log(num))

Array.prototype.mySort = function() {
    for (var i = 0 ; i < this.length; i++) {
        for(var j = i + 1; j < this.length; j++){
            if(this[i] > this[j]) {
                var swap = this[i];
                this[i] = this[j];
                this[j] = swap;
            }
        }
    }
return this;
}
console.log([2, 4, 5, 1, -1, 6, 9].mySort())

Array.prototype.myFilter = function (func) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) {
      newArr.push(this[i])
    }
  }
  return newArr
}
console.log([1, 2, 3].myFilter(number => number % 2 !== 0))

Array.prototype.myMap = function() {
  let map = [];
  for(let i = 0; i < this.length; i++) {
      map[i] = this[i] + 5;
  }
  return map
}
console.log([2, 4, 5, 1, -1, 6, 9].myMap())
