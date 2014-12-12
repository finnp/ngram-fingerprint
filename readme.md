# ngram-fingerprint

Windows | Mac/Linux
------- | ---------
[![Windows Build status](http://img.shields.io/appveyor/ci/finnp/ngram-fingerprint.svg)](https://ci.appveyor.com/project/finnp/ngram-fingerprint/branch/master) | [![Build Status](https://travis-ci.org/finnp/ngram-fingerprint.svg?branch=master)](https://travis-ci.org/finnp/ngram-fingerprint)

JavaScript implementation of the ngram-fingerprint algorithm from the Open Refine project
described [here](https://github.com/OpenRefine/OpenRefine/wiki/Clustering-In-Depth#n-gram-fingerprint).

## Algorithm

The algorithm is slightly different to the one by Google Refine. The replacements
of extended western characters is already done in the third step and not as the last step.
This is mostly done so the sorting will work properly.

1. change all characters to their lowercase representation
2. remove all punctuation, whitespace, and control characters
3. normalize extended western characters to their ASCII representation
4. obtain all the string n-grams
5. sort the n-grams and remove duplicates
6. join the sorted n-grams back together

## Usage

```js
var fingerprint = require('ngram-fingerprint')

fingerprint(2, 'paris') // returns arispari

```