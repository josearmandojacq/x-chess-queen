var expect = require('expect.js');
var createMatrix = require('./../src/createMatrix.js');
var renderPlainText = require('./../src/renderPlainText.js');

describe('renderPlainText', function () {
  it('is a function', function () {
    expect(renderPlainText).to.be.a('function');
  });

  it('render the matrix as a string', function () {
    var matrix = createMatrix(2, 4);
    var result = renderPlainText(matrix);
    console.log(typeof (result[0]));
    expect(result[0]).to.be.a('string');
  });
});
