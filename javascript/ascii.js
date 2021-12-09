function sumAscii(s){
  return [...s].reduce((a, b) => a + b.charCodeAt(), 0)
} // s = "abc" etc.

function fromAscii(arr){
  return arr.map(x => String.fromCharCode(x)).join``
} // arr = [65, 122, 42, 97] etc.
