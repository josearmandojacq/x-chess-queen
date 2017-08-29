var expect = require('expect.js');
var createMatrix = require('./../src/createMatrix.js');
var matrixFillSequence = require('./../src/matrixFillSequence.js');

describe('matrixFillSequence', function () {
  it('is a function', function () {
    expect(matrixFillSequence).to.be.a('function');
  });

  it('fill the matrix with numbers', function () {
    var matrix = createMatrix(3, 6);
    var result = matrixFillSequence(matrix);
    expect(result[0][0]).to.be.a('number');
    expect(result[0][1]).to.be.a('number');
  });
});
