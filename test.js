var getRandom = require('./index.js');
var expect = require('chai').expect;

describe('Tests for getting random numbers', function () {
  it('Should get a random number between 5 to 100', function () {
    expect(getRandom(5, 100)).gt(5).lte(100);
  });
  
  it('Should get a random number between 0 to 10', function () {
    expect(getRandom(10)).gt(0).lte(10);
  });
});