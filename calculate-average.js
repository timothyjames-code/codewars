// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


// ************My Solution**********

  
function findAverage(array) {
  // your code here
  if (array.length === 0 ){
    return 0
  } else{
  
  let newArr = array.reduce((acc, c) => (acc + c))
  return (newArr / (array.length));
    }
}


  // *****OTHER SOLUTION*****

  // var find_average = (array) => {  
  //   return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  // }