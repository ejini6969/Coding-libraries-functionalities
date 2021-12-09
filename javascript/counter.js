function counter(s){
  return [...s].reduce((acc, val) => (acc[val] = acc[val] + 1 || 1, acc), {})
} // string

function counter2(arr){
  return arr.reduce((acc, val) => (acc[val] = acc[val] + 1 || 1, acc), {})
} // array
