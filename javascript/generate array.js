function generate(n){
  return Array.from({length: n}, (_, i) => i + 1) // start from 1 to n
}

function range(m, n){
  // assuming n >= m
  return Array.from({length: n - m + 1}, (_, i) => i + m) // start from m to n
}

function rangeNoOrder(m, n){
  m = Math.min(m, n)
  n = Math.max(m, n)
  return Array.from({length: n - m + 1}, (_, i) => i + m) // start from m to n (after redefining variable)
}
