// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


// ************My Solution**********


function reverseWords(str) {
  let newStr = str.split(' ')
  
 let reverse = newStr.map((word)=> {
   return word.split('').reverse().join('')
 })
  return reverse.join(' ')
}

