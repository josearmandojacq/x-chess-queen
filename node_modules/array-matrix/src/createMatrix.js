module.exports = function createMatrix(rowsCount, columnsCount) {
  var matrix = [];

  if (rowsCount !== 0 && columnsCount !== 0) {
    for (var i = 0; i < rowsCount; i++) {
      matrix[i] = [];
      for (var j = 0; j < columnsCount; j++) {
        matrix[i].push(0);
      }
    }

    return matrix;
  }else {
    alert('No valids arguments');
    return;
  }
};
