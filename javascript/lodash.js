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
