// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.


// ************My Solution**********

  
function arrayPlusArray(arr1, arr2) {
  
  let num1 = arr1.reduce((acc, c) => acc + c,0)
  let num2 = arr2.reduce((acc, c) => acc + c,0)
  
  return num1 + num2; //something went wrong
}


  // *****BETTER SOLUTION*****

  // function arrayPlusArray(arr1, arr2) {
  //   return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
  // }