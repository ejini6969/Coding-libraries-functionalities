// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Array~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const _ = require("lodash")

// [1, 2, 3] -> 3
function len(arr){
  return _.size(arr) // arr.length
}
// [0, 2, null, "abc", undefined", -9] -> [2, "abc", -9]
function alltrue(arr){
  _.compact(arr) // arr.filter(Boolean) 
}
// ["e", "j", "i", "n", "i"] -> {'e': 1, 'j': 1, 'i': 2, 'n': 1}
function counter(arr){
  return _.countBy(arr) // arr.reduce((a, b) => (a[b] = a[b] + 1 || 1, a), {})
}
// [[1, 2, 3], ["a", "b", "c"], [1, 2, 3]] -> [1, 2, 3, "a", "b", "c", 1, 2, 3]
function f(array){
  return _.flatten(array) // [].concat(...array)
}
// [1, 2, 3] -> [3, 2, 1]
function reverseList(arr) {
  return _.reverse(arr); // arr.reverse()                              
}
// [1, 11, 4, 7] -> [1, 4, 7, 11]
function fsort(arr){
  return _(arr).sortBy().value() // arr.sort((a, b) => a - b)
}
// [[1, 'a'], [1, 'd'], [3, 'c'], [4, 'k']] -> [[4, 'k'], [3, 'c'], [1, 'a'], [1, 'd']]
function forder(arr){
  return _(arr).orderBy([x => x[0], x => x[1]], ['desc', 'asc']) // arr.sort((a, b) => b[0] - a[0] || a[1].localeCompare(b[1]))
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
// [1, 2, 3, 4] -> 10
function fsum(arr){
  return _.sum(arr) // arr.reduce((a, b) => a + b, 0)
}
// [1, 2, 3, 4] -> 24
function fmul(arr){
  return _.reduce(arr, (a, b) => a * b, 1) // arr.reduce((a, b) => a * b, 1)
}
// [1, 3, 5, 7], 3 -> true
function check(a, x){
  return _.includes(a, x); // a.includes(x)
};
// ["hello", "amazing", "world"] -> "hello amazing world"
function smash(words) {   
  return _.join(words, ' '); // words.join` `
};
// [23, -1, 3, -4] -> [23, 3]
function fil(arr){
  return _.filter(arr, x => x > 0) // arr.filter(x => x > 0)
}
// [0, 3, 4, 5] -> 50
function mapsum(arr){
  return _(arr).map( n => n**2 ).sum() // arr.map(n => n**2).reduce((a, b) => a + b, 0)
}
// [1, 2, 3], [4, 5, 6] -> 21 ( arr1.concat(arr2).reduce((a, b) => a + b, 0) )
// https://www.codewars.com/kumite/61eccdf8eab3f529a8c6ae46?sel=61eccdf8eab3f529a8c6ae46 
// "abcdef" -> "ace bdf" (partitioning
// https://www.codewars.com/kumite/61ed084ceab3f50017c6ba8b?sel=61ed0979eab3f50031c6bb41
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~String~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// "ejini" -> 5
function f(s){
  return _.size(s) // s.length
}
// "ejini" -> {'e': 1, 'j': 1, 'i': 2, 'n': 1}
function counter(s){
  return _.countBy(s) // [...s].reduce((a, b) => (a[b] = a[b] + 1 || 1, a), {})
}
// "abc", 3 -> "abcabcabc"
function rep(s, n){
  return _.repeat(s, n) // s.repeat(n)
}
// "a b c" -> "abc"
function spaceremove(s){
  return _.replace(s, /\s/g, "") // s.replace(/\s/g, "")
}
// "abc" -> "ABC"
function up(s){
  return _.toUpper(s) // s.toUpperCase()
}
// "ABC" -> "abc"
function up(s){
  return _.toLower(s) // s.toLowerCase()
}
// "Robin Singh" -> ["Robin", "Singh"]
function stringToArray(string){
  return _.split(string, ' '); // string.split` `
}
// "abc", "bc" -> false
function solution(str, starting){
  return _.startsWith(str, starting); // str.startsWith(ending)
}
// "abc", "bc" -> true
function solution(str, ending){
  return _.endsWith(str, ending); // str.endsWith(ending)
}
// "JACK" -> "Jack"
function caps(s){
  return _.capitalize(s) // s[0].toUpperCase() + s.slice(1).toLowerCase()
}
// "32" -> 32
function int(s){
  return _.toInteger(s) // +s / Number(s) / parseInt(s)
}
