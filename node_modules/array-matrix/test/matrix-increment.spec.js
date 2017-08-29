var expect = require('expect.js');
var createMatrix = require('./../src/createMatrix');
var matrixIncrement = require('./../src/matrixIncrement');

describe('matrixIncrement', function () {
  it('is a function', function () {
    expect(matrixIncrement).to.be.an('function');
  });

  it('increments the values of the matrix', function () {
    var matrix = createMatrix(2, 2);
    var result = matrixIncrement(matrix);
    console.log(result);
    expect(result[0][0]).to.be(1);
    expect(result[0][1]).to.be(2);
  });
});
