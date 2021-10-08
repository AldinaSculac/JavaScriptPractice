// 1. Check if a String is palindrome or not
document.querySelector('#submit').addEventListener('click', function(e){
  e.preventDefault();
  const word = document.getElementById('word').value.toLowerCase();
  const word2 = reverseString(word);

  if(word === word2){
    document.querySelector('#res').innerHTML = 'The word is a palindrome.';
  } else {
    document.querySelector('#res').innerHTML ='The word is not a palindrome.';
  }
});


const reverseString = (word) => {
  // Split word to letter
  const array = [];
  for(let i = 0; i < word.length; i++){
    array.push(word[i]);
  }

  // Change order
  array.reverse();

  // Join array letters to word
  const newWord = array.join("");
  return newWord;
}


// 2. Write a method that will remove any given character from a String?
document.querySelector('#submit2').addEventListener('click', function(e){
  e.preventDefault();
  const str = document.getElementById('str').value.toLowerCase();
  const char = document.getElementById('char').value.toLowerCase();
  
  document.querySelector('#res2').innerHTML = removeChar(str, char);
});

const removeChar = (str, char) => {
  // Split word to letter
  const array = [];
  for(let i = 0; i < str.length; i++){
    if(str[i] !== char){
      array.push(str[i]);
    }
  }

  // Join array letters to word
  const newWord = array.join("");
  return newWord;
}

// 3. Print all permutation of String Recursive way?
document.querySelector('#submit3').addEventListener('click', function(e){
  e.preventDefault();
  const permWord = document.getElementById('permWord').value.toLowerCase();
  document.querySelector('#res3').innerHTML = permute(permWord);
});

const permute = (string) => {
  if (!string || typeof string !== "string"){
    return "Please enter a string";
  } else if (string.length < 2 ){
    // If the length of the string is 0 or 1, then the permutation of that string is the string itself.
    return string;
  }

  // Array for all permutations
  let permutationsArray = [];

  for (let i = 0; i < string.length; i++){
    let char = string[i];

    // if char was used already, skip this time to remove duplicates
    if (string.indexOf(char) != i)
    continue;

    let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length);

    for (let permutation of permute(remainingChars)){
      permutationsArray.push(char + permutation)}
  }
  return permutationsArray;
}

// 4. Write a function to find out the longest palindrome in a given string?

// 5. How to convert numeric String to int in JavaScript?
// Check if string is [0,1,2,3,4,5,6,7,8,9];
document.querySelector('#submit5').addEventListener('click', function(e){
  e.preventDefault();
  const strToInt = document.getElementById('strToInt').value.toLowerCase();

  document.querySelector('#res5').innerHTML = strToNumFunc(strToInt);
});

const strToNumFunc = (str) => {
  const numbers = [0,1,2,3,4,5,6,7,8,9];

  let strArray = [];
  for(let i = 0; i < str.length; i++){
    // check if string is numeric - keep only numeric strings
    for(let j = 0; j < numbers.length; j++){
      if(numbers[j] == str[i]){
        strArray.push(str[i]);
      }
    }
  }

  // join numeric string
  const numStr = strArray.join("");
  const num = Number(numStr);

  if(strArray.length === 0){
    return `${str} is ${typeof(str)}`;
  } else {
    return `${numStr} is ${typeof(num)}`;
  }
}


// 6. How to remove duplicate elements from the array?
document.querySelector('#submit6').addEventListener('click', function(e){
  e.preventDefault();
  const array = document.getElementById('array').value.toLowerCase();

  document.querySelector('#res6').innerHTML = checkIfDuplicate(array);
});


const checkIfDuplicate = (arr) => {
  // convert input to an array
  let arrayFromStr = [];
  for(let i = 0; i < arr.length; i++){
    arrayFromStr.push(arr[i]);
  }
  var uniqueArray = [];
  // Loop through array values
  for(i=0; i < arrayFromStr.length; i++){
    if(uniqueArray.indexOf(arrayFromStr[i]) === -1) {
      uniqueArray.push(arrayFromStr[i]);
    }
  }
  return uniqueArray;
}

// 7. Write a program to find all even numbers up to a given number?
document.querySelector('#submit7').addEventListener('click', function(e){
  e.preventDefault();
  const numberEven = document.getElementById('numberEven').value;
  document.querySelector('#res7').innerHTML = findEven(parseInt(numberEven));
});

const findEven = (num) => {
  // get array of numbers
  let numArr = [];
  for (let i = 0; i <= num; i++){
    if(i % 2 === 0){
      //console.log(i)
    numArr.push(i);
    }
  }
  return numArr;
}


// 8. Write a program to find all prime numbers up to a given number?
document.querySelector('#submit8').addEventListener('click', function(e){
  e.preventDefault();
  const numberPrime = document.getElementById('numberPrime').value;
  document.querySelector('#res8').innerHTML = getPrime(numberPrime);
});

const getPrime = (num) => {
  let numArr = [];
  for (let i = 1; i <= num; i++){
    if(isPrime(i)){
      numArr.push(i);
    }
  }
  return numArr;
}

const isPrime = (num) => {
  // A prime number (or a prime) is a natural number greater than 1 that is not a product of two smaller natural numbers
  let root = Math.ceil(Math.sqrt(num)); // less loops if num = 4, will get 2

  if(num < 2) {
    return false;
  }

  for (let i = 2; i <= root; i++){
    if(num % i === 0){
      return false;
    }
  }
  return true;
}


// 9. How to check if two String are Anagram?
document.querySelector('#submit9').addEventListener('click', function(e){
  e.preventDefault();
  const firstWord = document.getElementById('firstWord').value;
  const secondWord = document.getElementById('secondWord').value;

  document.querySelector('#res9').innerHTML = checkIfAnagram(firstWord, secondWord);
});

const checkIfAnagram = (word1, word2) => {
  if (word1.length !== word2.length){
    // check if two words are of equal length
    return false;
  } else {
    // conver words to array, and order them alphabetically
    let arr1 = stringToArraySort(word1, 'sort');
    let arr2 = stringToArraySort(word2, 'sort');

    for(let i = 0; i < arr1.length; i++){
      if(arr1[i] == arr2[i]){
        return true;
      } else {
        return false;
      }
    }
    
  }
}

const stringToArraySort = (str, type) => {
  let arr = [];
  for(let i = 0; i < str.length; i++){
    arr.push(str[i]);
  }

  if(type == 'sort'){
    return arr.sort();
  } else if (type == 'reverse') {
    return arr.reverse();
  }
}

// 10. Given two arrays, 1,2,3,4,5 and 2,3,1,0,5 find which number is not present in the second array?
let missingNum = 4;
const array1 = [1,2,3,4,5];
const array2 = [2,3,1,0,5];


const checkArray = (a,b) => {
  let difference = a.filter(x => b.indexOf(x) === -1);
  return difference;
}

const checkInludedArray = (a,b) => {
  let difference = a.filter(x => b.includes(x));
  return difference;
}

document.querySelector('#res10').innerHTML = `1-2 | Missing number is ${checkArray(array1,array2)}`;

document.querySelector('#res10b').innerHTML = `2-1 | Missing number is ${checkArray(array2,array1)}`;

// Included
document.querySelector('#res10c').innerHTML = `Same numbers are ${checkInludedArray(array2,array1)}`;



// 11. How to find the largest and smallest number in an array?
document.querySelector('#submit11').addEventListener('click', function(e){
  e.preventDefault();
  const getMinMax = document.getElementById('getMinMax').value;
  document.querySelector('#res11').innerHTML = getMinMaxNum(getMinMax);
});

const getMinMaxNum = (str) => {
  let arr = getArrayOfNum(str);
  return `Min: ${arr[0]} and Max: ${arr[arr.length - 1]}`;
}


// 12. How to find the top two maximum number in an array?
document.querySelector('#submit12').addEventListener('click', function(e){
  e.preventDefault();
  const getMax = document.getElementById('getMax').value;
  document.querySelector('#res12').innerHTML = getMaxNum(getMax);
});

const getMaxNum = (str) => {
  let arr = getArrayOfNum(str);
  arr.reverse();
  return `MaxMax: ${arr[0]} and Max: ${arr[1]}`;
}


// convert a string to an array of numbers
const getArrayOfNum = (string) => {
  var array = string.split(",").map(Number);
  return array.sort((a, b) => {
    return a - b;
  });
}