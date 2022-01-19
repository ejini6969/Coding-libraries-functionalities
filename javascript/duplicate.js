// check if string / array contains duplicate entries
function checkIfDup(s){
  return new Set(s).size() !== s.length // True -> duplicate
} 

// retrieve duplicates only
function findDup(arr){
  return arr.filter(x => arr.indexOf(x) != arr.lastIndexOf(x))
}

function findDup2(arr){
  let s = new Set()
  let ans = new Set()
  for(let x of arr){
    if(s.has(x)) ans.add(x)
    s.add(x)
  }
  return [...ans]
}

// remove duplicate numbers (don't remove original number)
function getUnique(arr){
  let s = new Set()
  for(let x of arr){
    if(!s.has(x)) s.add(x)
  }
  return [...s]
} 

function getUnique2(arr){
  return [...new Set(arr)]
}

function getUnique3(arr){
  return arr.filter((x, i) => i === arr.indexOf(x))
}

// remove duplicate numbers from behind (don't remove original number)
function getUniqueFromBehind(arr){
  let s = new Set()
  for(let x of arr.reverse()){
    if(!s.has(x)) s.add(x)
  }
  return [...s].reverse()
}

function getUniqueFromBehind2(arr){
  return new Set(...arr.reverse()).reverse()
}

function getUniqueFromBehind3(arr){
  return arr.filter((x, i) => arr.lastIndexOf(x) === i)
}
// remove all duplicate numbers (including original number)
function removeDup(arr){
  let s = arr.reduce((acc, val) => (acc[val] = acc[val] + 1 || 1, acc), {})
  return [...new Set(arr)].filter(x => s[x] == 1)
}
