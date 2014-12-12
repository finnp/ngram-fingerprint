var fingerprint = require('./')
var test = require('tape')

test('simple ngrams', function (t) {
  t.equal(fingerprint(1, 'paris'), 'aiprs')
  t.equal(fingerprint(2, 'paris'), 'arispari')
  t.end()
})

test('replace punctuation, control characters, spaces', function (t) {
  t.equals(fingerprint(1, 'p!#/a|\x00r    i\ts'), 'aiprs')
  t.end()
})

test('replace extended characters', function (t) {
  t.equal(fingerprint(2, 'pärïš'), 'arispari')
  t.end()
})