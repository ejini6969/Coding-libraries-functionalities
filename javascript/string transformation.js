function tr(s){
  // dict = {'1': ':', '2': ':', 'a': '~' ...} (too lengthy...)
  return s.replace(/./g, x => /\d/.test(x) ? ":" : /[aeiou]/i.test(x) ? "~" : /[b-df-hj-np-tv-z]/i.test(x) ? "!" : "&")
} // digits --> ":", vowels --> "~", consonants" --> "!", others --> "&"
