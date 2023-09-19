// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// ************My Solution**********

  
function sumMix(x){
  let toNum = x.map(val => Number(val));
  
  return toNum.reduce((acc, c)=> acc+c)
}




  // *****BETTER SOLUTION*****

  // function sumMix(x){
  //   return x.map(a => +a).reduce((a, b) => a + b);
  // }