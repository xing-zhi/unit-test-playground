'use strict';

const test = require('tape');

const sum = require('../js/sum');

test('test for function sum', function(t) {
  t.equal(sum(1, 2, 3, 4), 10);
  t.equal(sum(-1, -2, -3, -4), -10);
  t.equal(sum(-1, 0, 1), 0);

  t.end();
});
