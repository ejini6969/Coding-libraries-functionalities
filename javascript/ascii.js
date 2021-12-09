function sumAscii(s){
  return [...s].reduce((a, b) => a + b.charCodeAt(), 0)
}
