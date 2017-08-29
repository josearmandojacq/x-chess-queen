var expect = require('expect.js');
var createMatrix = require('./../src/createMatrix');

describe('createMatrix', function () {
  it('is a function', function () {
    expect(createMatrix).to.be.a('function');
  });

  it('returns a multi-dimensional array', function () {
    var result = createMatrix(1, 1);
    expect(result).to.be.an('array');
    expect(result[0]).to.be.an('array');
  });

  it('creates the given amount of entries given by the first argument', function () {
    var result = createMatrix(3, 3);
    expect(result.length).to.be(3);
  });

  // YOU ;) complete that one
  it('creates the given amount of entries given by the second argument', function () {
    var result = createMatrix(3, 4);
    expect(result[0].length).to.be(4);
  });
});
