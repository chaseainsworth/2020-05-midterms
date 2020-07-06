const capitalizeSentences = function(str) {
  let result = "";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < str.length; i++) {
    if (lowerCase.includes(str[0]) === true) {
      result = str[0].toUpperCase() + str[i + 1] + result;
    } else if (str[i].indexOf(". ") + 1 === true) {
      result = result + str[i].toUpperCase();
    }
  }
return result;
}

const isValidPassword = function(str) {
  if (str.includes(" ") === true) {
  return false;
  } else if (str.length <= 11 == true) {
    return false;
  } else {
    return true;
  }
}

const makeHalfSquares = function(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * arr[i] / 2)
  }
return result;
}


const countAs = function(arr) {
  let count = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 90) {
    count++
  }
}
return count;
}

const deleteMiddleLetters = function(str) {
  if (str.length % 2 === 0) {
    let firstHalf = str.slice((str[0]), (str.length / 2 -1 ));
    let lastHalf = str.slice((str.length / 2 + 1), (str.length));
    return firstHalf + lastHalf;
  } else {
    let firstHalfOdd = str.slice((str[0]), (str.length / 2));
    let lastHalfOdd = str.slice((str.length / 2 + 1), (str.length));
    return firstHalfOdd + lastHalfOdd;
  }  
}

const lastIndexOfSpace = function(str) {
  return str.lastIndexOf(" ")
}

const hyphenateName = function(str) {
  let lastIndex = str.lastIndexOf(" ")

  return str.replace(str[lastIndex], "-");
}

console.log(hyphenateName("Chase Ainsworth Bigdog"));


if (typeof capitalizeSentences === 'undefined') {
  capitalizeSentences = undefined;
}

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof makeHalfSquares === 'undefined') {
  makeHalfSquares = undefined;
}

if (typeof countAs === 'undefined') {
  countAs = undefined;
}

if (typeof deleteMiddleLetters === 'undefined') {
  deleteMiddleLetters = undefined;
}

if (typeof lastIndexOfSpace === 'undefined') {
  lastIndexOfSpace = undefined;
}

if (typeof hyphenateName === 'undefined') {
  hyphenateName = undefined;
}


module.exports = {
  capitalizeSentences,
  isValidPassword,
  makeHalfSquares,
  countAs,
  deleteMiddleLetters,
  lastIndexOfSpace,
  hyphenateName,
}
