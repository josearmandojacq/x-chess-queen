function attachListener(divCell, rowNum, columNum) {
  divCell.addEventListener('click', function () {
    removeHighlight();
    highlightRow(rowNum);
    highlightColumn(columNum);
    highlightDiagonals(rowNum, columNum);
    divCell.classList.add('changeColor');
  });
}

////////// rendering the board /////////////////////

function renderChessBoard() {

  ////// adding the elements to the table /////////////
  var matrix = [];
  for (var i = 0; i < 8; i++) {
    var divRow = document.createElement('div');
    divRow.classList.add('chessboard__row');
    matrix[i] = [];
    for (var t = 0; t < 8; t++) {
      var divCell = document.createElement('div');
      divCell.classList.add('chessboard__cell');
      attachListener(divCell, i, t);

      divRow.appendChild(divCell);
      matrix[i].push(divRow);
      if ((i - t) % 2 !== 0) {
        divCell.classList.add('chessboard__cell--black');
      }
    }

    chessBoardTable.appendChild(divRow);
  }

  return matrix;
}

function highlightRow(rowNum) {
  chessMatrix[rowNum][0].classList.add('chessboard__cell--highlight');

}

function highlightColumn(columnNum) {
  chessMatrix.forEach(function (rowArray) {
    rowArray[0].childNodes[columnNum].classList.add('chessboard__cell--highlight');
  });
}

function removeHighlight() {

  chessMatrix.forEach(function (rowArray) {

    rowArray[0].classList.remove('chessboard__cell--highlight');
    rowArray[0].childNodes.forEach(function (cells) {
      cells.classList.remove('chessboard__cell--highlight', 'changeColor');
    });

    //console.log(rowArray[0].childNodes);//.classList.add('chessboard__cell--highlight');
  });
}

function highlightCell(rowNum, columnNum) {

  chessMatrix[rowNum][0].childNodes[columnNum].classList.add('chessboard__cell--highlight');

}

function highlightDiagonals(rowNum, columnNum) {
  var x;
  var y;
  var c;
  var mx = chessMatrix.length;
  var my = chessMatrix[0].length;

  c = 1;
  for (y = rowNum + 1; y < my; y++) {
    for (x = columnNum + 1; x < mx; x++) {
      if (y === (rowNum + c) && x === (columnNum + c)) {
        highlightCell(y, x);
        c++;
      }
    }
  }

  c = 1;
  for (y = rowNum + 1; y < my; y++) {
    for (x = columnNum - 1; x >= 0; x--) {
      if (y === (rowNum + c) && x === (columnNum - c)) {
        highlightCell(y, x);
        c++;
      }
    }
  }

  c = 1;
  for (y = rowNum - 1; y >= 0; y--) {
    for (x = columnNum + 1; x < mx; x++) {
      if (y === (rowNum - c) && x === (columnNum + c)) {
        highlightCell(y, x);
        c++;
      }
    }
  }

  c = 1;
  for (y = rowNum - 1; y >= 0; y--) {
    for (x = columnNum - 1; x >= 0; x--) {
      if (y === (rowNum - c) && x === (columnNum - c)) {
        highlightCell(y, x);
        c++;
      }
    }
  }
}

////////////// Calling the functions /////////////
var chessBoardTable = document.querySelector('.chessboard__table');
var chessMatrix = renderChessBoard();

var arrayMatrixLib = require('array-matrix');
var createMatrix = arrayMatrixLib.createMatrix;
