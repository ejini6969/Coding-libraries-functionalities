function checkDup(s){
  return new Set(s).size() !== s.length
} 

function findDup(arr){
  return arr.filter(x => arr.indexOf(x) != arr.lastIndexOf(x))
}
