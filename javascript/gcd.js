function gcd(m, n){
  return !n ? m : gcd(n, m % n)
}
