// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// ************My Solution**********

function reverseWords(str) {
  let splitStr = str.split(" ");

  let reverseWord = splitStr.reverse();

  let newStr = reverseWord.join(" ");

  return newStr;
}
