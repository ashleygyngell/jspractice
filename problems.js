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
};
