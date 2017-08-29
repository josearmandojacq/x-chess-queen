var expect = require('expect.js');
var createMatrix = require('./../src/createMatrix.js');
var matrixFillRowNum = require('./../src/matrixFillRowNum.js');

describe('matrixFillRowNum', function () {
  it('is a function', function () {
    expect(matrixFillRowNum).to.be.a('function');
  });

  it('fill the rows with numbers', function () {
    var matrix = createMatrix(2, 3);
    var result = matrixFillRowNum(matrix);
    expect(result[0][0]).to.be.a('number');
    expect(result[0][1]).to.be.a('number');
  });
});
