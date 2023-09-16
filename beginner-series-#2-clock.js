// DESCRIPTION:
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000


// My Solution 

function past(h, m, s){
  //#Happy Coding! ^_^
  
  let hours = h * 60 * 60 * 1000;
  let min = m * 60 * 1000;
  let sec = s * 1000; 
  return hours + min + sec
}