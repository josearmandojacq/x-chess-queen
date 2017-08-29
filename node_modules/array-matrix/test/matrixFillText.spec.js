var expect = require('expect.js');
var createMatrix = require('./../src/createMatrix.js');
var matrixFillText = require('./../src/matrixFillText.js');

describe('matrixFillText', function () {
  it('is a function', function () {
    expect(matrixFillText).to.be.a('function');
  });

  it('fill the matrix with letters', function () {
    var matrix = createMatrix(3, 5);
    var text = 'Test';
    var result = matrixFillText(matrix, text);
    expect(result[0][0]).to.be.a('string');
    expect(result[0][1]).to.be.a('string');
  });
});
