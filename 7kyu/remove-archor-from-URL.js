// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"

// ************My Solution**********

function removeUrlAnchor(url) {
  let newUrl = url.split("#");

  return newUrl[0];
}
