// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Array~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const _ = require("lodash")

// [[1, 2, 3], ["a", "b", "c"], [1, 2, 3]] -> [1, 2, 3, "a", "b", "c", 1, 2, 3]
function f(array){
  return _.flatten(array) // [].concat(...array)
}
// [1, 2, 3] -> [3, 2, 1]
function reverseList(arr) {
  return _.reverse(arr); // arr.reverse()                              
}
// [1, 2, 3, 4], 2 -> 1
// [1, 3, 5, 7], 8 -> Not found
function find(a, e) {
  return _.indexOf(a, e)==-1?"Not found":_.indexOf(a,e); // a.indexOf(e)
}
// [1, 2, 3, 4] -> 1
function fmin(arr){
  return _.min(arr) // Math.min(...arr)
}
// [1, 2, 3, 4] -> 4
function fmax(arr){
  return _.max(arr) // Math.max(...arr)
}
// [1, 2, 3, 4] -> 2.5
function fmean(arr){
  return _.mean(arr) // arr.reduce((a, b) => a + b, 0) / arr.length
}
