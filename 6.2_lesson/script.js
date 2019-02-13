// isPrime
function isPrime (num) {
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
  return num !== 1 && num !== 0;
}
console.log(isPrime(17))

//factorial

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log (factorial(5))

//fibonacci
function fib(num) {
  var a = 1,
    b = 1;
  for (var i = 3; i <= num; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}
console.log(fib(7))

//isSorted

var sortArray = [1, 2, 3, 4]
function isSorted(array) {
  for (a = 0; a < array.length; a++) {
    for (b = 0; b < a; b++) {
       if (array[b] > array[a]) {
         return false;
       }
    }
    for (b = a + 1; b < array.length; b++) {
       if (array[b] < array[a]) return false;
    }
  }
  return true;
} console.log(isSorted(sortArray))

//reverse
function reverse(str) {
  let reversed = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
} console.log(reverse("hello"))

//indexOf
var arr = [1, 2, 3, 4];
Array.prototype.myIndexOf = function (elem) {
  for (var i = 0; i < this.length; i++){
    if (this[i] === elem) {
      return i
    }
} return -1
}
console.log (['e', 'f', 'a'].myIndexOf('f'))



//isPalindrome
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome("eye"));

//missing
var numbers = [0,1,3,4,5,7,8];

function isMissing (numbers) {
  var missing = [];


  for ( var i = 0; i < numbers.length; i++ ) {

      if ( (numbers[i+1] - numbers[i]) > 1 ) {
          missing.push( numbers[i+1] - numbers[1] );
      }
  }

  console.log( missing );
}

isMissing(numbers)

//isBalanced
const isBalanced = (string) => {
  let open = [];
  const openBrackets = new Set(['(', '[', '{']);
  const bracketCorrespondence = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  for (let c of string) {
    if (openBrackets.has(c)) {
      open.push(c);
    } else if (bracketCorrespondence[c] && open.pop() !== bracketCorrespondence[c]) {
      return false;
    }
  }

  return !open.length;
}

console.log(isBalanced('()]'))
