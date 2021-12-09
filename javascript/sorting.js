function sortByLastChar(s){
  return s.sort((a, b) => a[a.length - 1].localeCompare(b[b.length - 1])) // sort by last character
}

function sortByFrequency(arr){
  const dic = arr.reduce((acc, val) => (acc[val] = acc[val] + 1 || 1, acc), {})
  return arr.sort((a, b) => dic[b] - dic[a] || a - b)) // sort by frequency (highest to lowest) followed by order
}
