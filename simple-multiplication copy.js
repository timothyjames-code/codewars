// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// ************My Solution**********

  
  function simpleMultiplication(number){
    // your code........
    if (number % 2 === 0) return number * 8;
    else return number * 9;
}


  // *****BETTER SOLUTION*****

//   function simpleMultiplication(n) {
//     return n * (n % 2 ? 9 : 8);
// }