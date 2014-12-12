var asciify = require('asciify-string')

module.exports = fingerprint

function fingerprint(size, text) {
  text = text.toLowerCase()
  
  text = text.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]|[\x00-\x1F\x7F]|\s/g, '')
  text = asciify(text)

  var ngrams = []
  for(var i = 0; i <= text.length - size; i++) {
    ngrams.push(text.substr(i, size))
  }

  ngrams = ngrams.sort().filter(function (ngram, pos) {
    return ngram !== ngrams[pos - 1]
  })
  
  return ngrams.join('')
}
