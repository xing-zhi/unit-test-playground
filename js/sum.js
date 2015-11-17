'use strict';

module.exports = function sum() {
  const args = [].slice.apply(arguments);

  return args.reduce((sum, x) => sum + x, 0);
};
