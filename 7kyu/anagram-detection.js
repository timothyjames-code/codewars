// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"



// ************My Solution**********

  
var isAnagram = function(test, original) {
  let wordOne = test.toLowerCase().replace(/[^a-z]/g, '');
  let wordTwo = original.toLowerCase().replace(/[^a-z]/g, '');
  
  let sortedWord1 = wordOne.split('').sort().join('');
  let sortedWord2 = wordTwo.split('').sort().join('');
  
  return sortedWord1 === sortedWord2;

};


