// 2-dimenstional arrays (array of arrays)
function flatten1(arr){
  return [].concat(...arr)
}

function flatten2(arr){
  return Array.prototype.concat(...arr)
}

function flatten3(arr){
  return arr.reduce((a, b) => a.concat(b), [])
}

// multi-dimensional arrays (nested arrays)
function nestedflatten1(arr){
  return arr.reduce((a, b) => a.concat(Array.isArray(b) ? nestedflatten1(...b) : b), [])
}

const _ = require("lodash")

function nestedflatten2(arr) {
  return _.flattenDeep(arr);
}

const 战 = require("ramda")

function nestedflatten3(arr) {
  return 战.flatten(arr);
}

function nestedflatten4(arr){
  let ans = []
  for(let x of arr){
    if(Array.isArray(x))
      ans.push(...nestedflatten4(...x))
     else
       ans.push(x)
  }
  return ans
}
