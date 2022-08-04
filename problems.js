/* eslint-disable no-unused-vars */

// ? write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
// ? eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"

// function hello(string) {
//   if (!string) {
//     return 'Hello World!';
//   }
//   return `Hello ${string}!`;
// }

// Rewritten as

function hello(string) {
  return string ? `Hello ${string}!` : 'Hello World!';
}

// ? write a function that will calculate the area of a circle, given the radius

function areaOfCircle(radius) {
  return Math.PI * (radius * radius);
}

// ? write a function to convert celcius to farenheit

function celciusToFarenheit(celcius) {
  return celcius * 1.8 + 32;
}

// ? write a function that will reverse a number (eg. 456733 become 337654)

function numberReverse(number) {
  return Number(number.toString().split('').reverse().join(''));
}

// ? write a function to check if a word or phrase is a palindrome returning a boolean
// ? eg. palindromeCheck('dad') => true, palindrome('nonsense') => false

function palindromeCheck(string) {
  const trimmedString = string.replace(' ', '');
  if (trimmedString === trimmedString.split('').reverse().join('')) return true;
  else return false;
}

// ? write a function that returns the letters of a word or phrase in alphabetical order case insensitive
// ? eg. orderStringAlphabetically('javascript is cool') => 'aacciijlooprsstv'

function orderStringAlphabetically(string) {
  return string
    .toLowerCase()
    .split('')
    .filter((char) => /[a-zA-z]/.test(char))
    .sort()
    .join('')
    .toLowerCase();
}

// ? write a function that capitalizes the first letter of each word
// ? eg. titleCase('the lord of the rings') => 'The Lord Of The Rings'
function titleCase(string) {
  return string
    .split(' ')
    .map((lotr) => `${lotr.charAt(0).toUpperCase()}${lotr.slice(1)}`)
    .join(' ');
}

// ? write a function that frames a string in asterisks (*)
// ?                            ***************
// ? eg: frame('Hello Kitty') => * Hello Kitty *
//  ?                           ***************
function frame(string) {
  const surroundFrame = '*'.repeat(string.length + 4);
  return `${surroundFrame}\n* ${string} *\n${surroundFrame}`;
}

// write a function to remove all empty values (null, undefined, '', NaN, false) EXCEPT 0 from an array.
// It should handle complex data types eg: {}, [] etc.
// eg: [0, false, [], undefined, {}, NaN, 'Kevin'] => [0, [], {}, 'Kevin'];
function removeBlank(array) {
  return array.filter((value) => {
    return value === 0 || !!value;
  });
}

// write a function to return a random element from an array
// eg: [1,"elephant", "apple", 67] => "elephant"
function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// write a function that returns the second lowest and second highest number in an array
// eg: [1,2,3,4,5,6,7,8] => [2,7]
function secondLowestSecondHighest(array) {
  const orderedArray = array.sort((a, b) => {
    return a - b;
  });
  return [orderedArray[1], orderedArray[array.length - 2]];
}

// write a function that will convert a price into coins needed to make up that price
// the coins available are 1, 2, 5, 10, 20, 50, 100
// the function should use the smallest number of coins possible
// eg: coins(1.99) => [100, 50, 20, 20, 5, 2, 2]
function coins(price) {
  let pence = price * 100;
  const coins = [100, 50, 20, 10, 5, 2, 1];
  const result = [];

  coins.forEach((coin) => {
    while (pence - coin >= 0) {
      pence -= coin;
      result.push(coin);
    }
  });

  return result;
}

// write a function to merge two arrays and remove duplicates
// eg: mergeUnique([9,8,8,9], [7,8,8,7]) => [9,8,7]
function mergeUnique(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2)));
}

// write a function that converts an array of strings into an array of objects, with the supplied key
// eg: arrayToObjects(["Mike", "Emily"], "name") => [{ name: "Mike" }, { name: "Emily"}]
function arrayToObjects(array, key) {
  return array.map((string) => {
    const object = {};
    object[key] = string;
    return object;
  });
}

// write a function to convert an object into an array of arrays containing key and value
// eg: objectToArray({ name: 'Will Smith', dob: '15-09-1968' }) => [['name', 'Will Smith'], ['dob', '15-09-1968']];
function objectToArray(object) {
  return Object.keys(object).map((key) => {
    return [key, object[key]];
  });
}

// write a function to return the number of occurances of each letter of a string in an object case insensitive
// eg. numOfOccurances('This is great') => { t: 2, h: 1, i: 2, s: 2, g: 1, r: 1, e: 1, a: 1 }
function numOfOccurances(string) {
  return string
    .toLowerCase()
    .replace(/ /g, '')
    .split('')
    .reduce((obj, letter) => {
      obj[letter] = obj[letter] ? obj[letter] + 1 : 1;
      return obj;
    }, {});
}

// write a function to find the first n fibonacci numbers
// the fibonacci sequence is a series of numbers, each number is the sum of the last two
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 etc...
// eg: fibonacci(4) => [0,1,1,2]; fibonacci(8) => [0, 1, 1, 2, 3, 5, 8, 13];
function fibonacci(n) {
  const fib = [0];
  for (let i = 1; i < n; i++) {
    fib.push(fib[i - 2] + fib[i - 1] || 1);
  }
  return fib;
}

// ! Do not alter any of the code below

module.exports = {
  hello,
  areaOfCircle,
  celciusToFarenheit,
  numberReverse,
  palindromeCheck,
  orderStringAlphabetically,
  titleCase,
  frame,
  removeBlank,
  randomElement,
  secondLowestSecondHighest,
  coins,
  mergeUnique,
  arrayToObjects,
  objectToArray,
  numOfOccurances,
  fibonacci,
};
