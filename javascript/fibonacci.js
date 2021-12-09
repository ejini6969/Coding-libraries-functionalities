function fib(n){
  return n < 2 ? n : fib(~-n) + fib(n - 2)
}
