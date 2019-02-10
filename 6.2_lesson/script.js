// isPrime
function isPrime (num) {
  for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num !== 1 && num !== 0;
}
console.log(isPrime(17))

//factorial
var f = [];
function factorial (num) {
  if (num == 0 || num == 1)
    return 1;
  if (f[num] > 0)
    return f[num];
  return f[num] = factorial(num - 1) * num;
}
console.log (factorial(6))

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
function isSorted(array) {
  var array = [-Infinity, -5, 0, 3, 9];
  for (a = 0; a < array.length; a++) {
    for (b = 0; b < a; b++) {
       if (array[b] > array[a]) return false;
    }
    for (b = a + 1; b < array.length; b++) {
       if (array[b] < array[a]) return false;
    }
  }
  return true;
} console.log(isSorted())

//reverse
function reverse(str) {
  let reversed = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
} console.log(reverse("hello"))

//indexOf
var arr = ['f', 2, 'a', 4];
console.log(arr.indexOf("a", 1))

//isPalindrome
function isPalindrome(str) {
    return str == str.split('').reverse().join('');
}
console.log(isPalindrome("eye"));

//missing
var a = [5, 10], count = 10;
var missing = new Array();

for(var i = 1; i <= count; i++) {
    if(a.indexOf(i) == -1) {
        missing.push(i);
    }
}
console.log(missing);

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
