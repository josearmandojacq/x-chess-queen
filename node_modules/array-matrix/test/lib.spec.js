var expect = require('expect.js');
var library = require('./../src/lib');
describe('array matrix library', function () {
  it('is an object', function () {
    expect(library).to.be.an('object');
  });

  it('has a createMatrix function', function () {
    expect(library.createMatrix).to.be.a('function');
  });
});
