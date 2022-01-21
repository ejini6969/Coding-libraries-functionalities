function gcd(m, n){
  return !n ? m : gcd(n, m % n)
}

function lcm(arr){
  return arr.reduce((a, b) => a * b / gcd(a, b), 1)
}
