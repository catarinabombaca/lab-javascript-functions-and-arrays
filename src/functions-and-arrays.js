// Find the maximum
let x = 4;
let y = 8;
function maxOfTwoNumbers(a, b){
  if (a<b){
    return b;
  } else {
    return a;
  }
}

//Find the longest word
//const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words){
  if (words.length === 0) {
    return null
  } else {
      let longestWordIndex = 0;
  for (i=0; i < words.length; i++) {
    if (words[i].length > words[longestWordIndex].length) {
      longestWordIndex = i;
      console.log(longestWordIndex);
    } else {
      continue;
    }
  }
  return words[longestWordIndex];
}}

//Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers (numbers) {
  let sumNumbers = 0;
  for (i=0; i < numbers.length; i++) {
    sumNumbers += numbers[i];
  }
  return sumNumbers;
}

//Calculate the average

function averageNumbers (numbers) {
  if (numbers.length === 0) {
    return null;
  } else {
  let average = sumNumbers(numbers)/numbers.length;
  return average
}}

function averageWordLength (words) {
  if (words.length === 0) {
    return null;
  } else {
    let wordLength = 0;
    for (i=0; i < words.length; i++) {
      wordLength += words[i].length;
    }
    let averageWordLength = wordLength/words.length;
    return averageWordLength;
  }
}

//Unique arrays

/*const words = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];*/

function uniquifyArray (words) {
  let uniqueArray = [];
  if (words.length === 1) {
    return words;
  } else if (words.length === 0) {
    return null;
  }
    else {
    for (i=0; i < words.length; i++) {
    if(!uniqueArray.includes(words[i])) {
      uniqueArray.push(words[i]);
    }
  }
  return uniqueArray;
  console.log(uniqueArray);
}}

//Find elements

function doesWordExist (words, wordToSearch) {
  if (words.length === 0) {
    return null;
  } else {
    if(words.includes(wordToSearch)) {
      return true
    } else {
      return false
    }
  }
}

//Count repetition

const words = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(words, wordToSearch) {
  let countWord = 0;
  if (words.length === 0){
    return 0;
  } else {
  for(i=0; i<words.length;i++) {
    if (words[i] === wordToSearch) {
      countWord++;
    }
  }
  return countWord;
}}
