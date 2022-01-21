function gcd(m, n){
  return !n ? m : gcd(n, m % n)
}

function gcd2(m, n){
  while(y){
    let z = n
    n = m % n
    m = z
  }
  return m
}   
