// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// ************My Solution**********

  
function digitize(n) {
  
  
  let newArr = n.toString().split('')
  
  let reversedNum = newArr.reverse().map(Number)

  
  return reversedNum
}



  // *****OTHER SOLUTION*****

  // function digitize(n) {
  //   return String(n).split('').map(Number).reverse()
  // }