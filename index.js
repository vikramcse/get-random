'use strict';

module.exports = function(min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  
  return min + Math.floor(Math.random() * (max - min + 1));
};