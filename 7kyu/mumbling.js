// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"


// ************My Solution**********


function accum(s) {
	let result = []
  
  for(let i = 0; i < s.length; i++){
    
  let newStr = s[i].toUpperCase() + s[i].toLowerCase().repeat(i)
  
   result.push(newStr)
    }
  
  return result.join('-')
  
}
 

// ******OTHER SOLUTION******

// function accum(s) {
// 	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }