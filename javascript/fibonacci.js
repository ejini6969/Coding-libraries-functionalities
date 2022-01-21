function fib(n){
  return n < 2 ? n : fib(~-n) + fib(n - 2)
}

const _ = require("bignumber.js")

function fib2(n){ // Big int
  let a = new _(0)
  let b = new _(1)
  while(n--){
    [a, b] = [b, a.plus(b)]
  }
  return a.toFixed(0)
}
