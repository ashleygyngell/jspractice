/* eslint-disable no-undef */

const fns = require('./problems');

describe('hello', () => {
  test('should return "Hello World!" if no argument is passed', () => {
    expect(fns.hello()).toEqual('Hello World!');
  });
  test('should return "Hello <argument>!" if one is passed', () => {
    expect(fns.hello('Mike')).toEqual('Hello Mike!');
  });
});

describe('areaOfCircle', () => {
  test('should find the area of a circle given a radius', () => {
    expect(fns.areaOfCircle(4)).toEqual(50.26548245743669);
    expect(fns.areaOfCircle(10)).toEqual(314.1592653589793);
    expect(fns.areaOfCircle(1)).toEqual(3.141592653589793);
  });
});

describe('celciusToFarenheit', () => {
  test('should convert celcius to farenheit', () => {
    expect(fns.celciusToFarenheit(0)).toEqual(32);
    expect(fns.celciusToFarenheit(-40)).toEqual(-40);
    expect(fns.celciusToFarenheit(100)).toEqual(212);
  });
});

describe('numberReverse', () => {
  test('should reverse a number', () => {
    expect(fns.numberReverse(123)).toEqual(321);
    expect(fns.numberReverse(4001)).toEqual(1004);
  });
  test('should handle decimals', () => {
    expect(fns.numberReverse(78.567)).toEqual(765.87);
  });
});

describe('palindromeCheck', () => {
  test('should check if a word is a palindrome', () => {
    expect(fns.palindromeCheck('pop')).toBe(true);
    expect(fns.palindromeCheck('dog')).toBe(false);
  });
  test('should check if a phrase is a palindrome', () => {
    expect(fns.palindromeCheck('nurses run')).toBe(true);
    expect(fns.palindromeCheck('will not work')).toBe(false);
  });
});

describe('orderStringAlphabetically', () => {
  test('should order a word alphabetically', () => {
    expect(fns.orderStringAlphabetically('happy')).toEqual('ahppy');
  });
  test('should order a phrase alphabetically', () => {
    expect(fns.orderStringAlphabetically('javascript is cool')).toEqual(
      'aacciijlooprsstv'
    );
  });
  test('should be case insensive', () => {
    expect(fns.orderStringAlphabetically('Testing Rocks')).toEqual(
      'cegiknorsstt'
    );
  });
});

describe('titleCase', () => {
  test('should capitalize the first letter of each word', () => {
    expect(fns.titleCase('this is it')).toEqual('This Is It');
  });
});

describe('frame', () => {
  test('should frame a string in asterisks', () => {
    expect(fns.frame('Rumplestiltskin')).toEqual(
      '*******************\n* Rumplestiltskin *\n*******************'
    );
    expect(fns.frame('Hello Kitty')).toEqual(
      '***************\n* Hello Kitty *\n***************'
    );
  });
});

describe('removeBlank', () => {
  test('should remove all empty values EXCEPT 0 from an array', () => {
    expect(
      fns.removeBlank([0, NaN, undefined, false, '', null, 'Kevin'])
    ).toEqual([0, 'Kevin']);
  });
  test('should be able to handle complex data types', () => {
    expect(fns.removeBlank([0, [], {}])).toEqual([0, [], {}]);
  });
});

describe('randomElement', () => {
  test('should return a random element from an array', () => {
    expect(fns.randomElement(['red', 'green', 'blue'])).toBeOneOf([
      'red',
      'green',
      'blue',
    ]);
  });
});

describe('secondLowestSecondHighest', () => {
  test('should return the second highest and second lowest numbers of an array', () => {
    expect(
      fns.secondLowestSecondHighest([99, 2000, -93, 40, -761115, 11])
    ).toEqual([-93, 99]);
  });
});

describe('coins', () => {
  test('should return the coins needed to make up the price supplied', () => {
    expect(fns.coins(1.5)).toEqual([100, 50]);
  });
  test('should use the smallest number of coins possible', () => {
    expect(fns.coins(1.99)).toEqual([100, 50, 20, 20, 5, 2, 2]);
    expect(fns.coins(2.88)).toEqual([100, 100, 50, 20, 10, 5, 2, 1]);
  });
});

describe('mergeUnique', () => {
  test('should merge two arrays', () => {
    expect(fns.mergeUnique([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test('should remove duplicates', () => {
    expect(
      fns.mergeUnique(
        ['Mike', 'Emily', 'Eduardo'],
        ['Eduardo', 'Will', 'Emily']
      )
    ).toEqual(['Mike', 'Emily', 'Eduardo', 'Will']);
    expect(fns.mergeUnique([5, 10, 15, 20], [10, 20, 30, 40])).toEqual([
      5, 10, 15, 20, 30, 40,
    ]);
  });
});

describe('arrayToObjects', () => {
  test('should convert an array of strings to an array of objects', () => {
    expect(typeof fns.arrayToObjects(['Paris', 'New York'], 'city')[0]).toBe(
      'object'
    );
  });
  test('should have one object for each string in the original array', () => {
    expect(fns.arrayToObjects(['Paris', 'New York'], 'city').length).toEqual(2);
  });
  test('each object should have the supplied key, and the value of the original array', () => {
    expect(fns.arrayToObjects(['Paris', 'New York'], 'city')[0].city).toEqual(
      'Paris'
    );
    expect(fns.arrayToObjects(['Paris', 'New York'], 'city')[1].city).toEqual(
      'New York'
    );
  });
});

describe('objectToArray', () => {
  test('should convert an object into an array', () => {
    expect(
      typeof fns.objectToArray({ name: 'Will Smith', dob: '15-09-1968' })
    ).toBe('object');
  });
  test('should have one array element for each key/value pair', () => {
    expect(
      fns.objectToArray({ name: 'Will Smith', dob: '15-09-1968' }).length
    ).toEqual(2);
  });
  test('each element should be an array of two elements', () => {
    expect(
      fns.objectToArray({ name: 'Will Smith', dob: '15-09-1968' })[0].length
    ).toEqual(2);
    expect(
      fns.objectToArray({ name: 'Will Smith', dob: '15-09-1968' })[1].length
    ).toEqual(2);
  });
  test('should contain the data in the correct format', () => {
    expect(
      fns.objectToArray({ name: 'Will Smith', dob: '15-09-1968' })[0]
    ).toEqual(['name', 'Will Smith']);
    expect(
      fns.objectToArray({ name: 'Will Smith', dob: '15-09-1968' })[1]
    ).toEqual(['dob', '15-09-1968']);
  });
});

describe('numOfOccurances', () => {
  test('should return the number of occurances of each letter of a string', () => {
    expect(fns.numOfOccurances('this is great')).toEqual({
      t: 2,
      h: 1,
      i: 2,
      s: 2,
      g: 1,
      r: 1,
      e: 1,
      a: 1,
    });
  });
  test('should be case insensive', () => {
    expect(fns.numOfOccurances('Feeling Like A Pro')).toEqual({
      f: 1,
      e: 3,
      l: 2,
      i: 2,
      n: 1,
      g: 1,
      k: 1,
      a: 1,
      p: 1,
      r: 1,
      o: 1,
    });
  });
});

describe('fibonacci', () => {
  test('should return the first n fibonacci numbers', () => {
    expect(fns.fibonacci(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    expect(fns.fibonacci(1)).toEqual([0]);
    expect(fns.fibonacci(50)).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
      2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418,
      317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465,
      14930352, 24157817, 39088169, 63245986, 102334155, 165580141, 267914296,
      433494437, 701408733, 1134903170, 1836311903, 2971215073, 4807526976,
      7778742049,
    ]);
  });
});
