(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
module.exports = {
  createMatrix: require('./createMatrix'),
  matrixFillSequence: require('./matrixFillSequence'),
  matrixFillRowNum: require('./matrixFillRowNum'),
  matrixFillText: require('./matrixFillText'),
  matrixIncrement: require('./matrixIncrement'),
  renderPlainText: require('./renderPlainText'),
};

},{"./createMatrix":1,"./matrixFillRowNum":3,"./matrixFillSequence":4,"./matrixFillText":5,"./matrixIncrement":6,"./renderPlainText":7}],3:[function(require,module,exports){
module.exports = function matrixFillRowNum(data) {
  var counter = 0;
  var newArray = [];

  data.forEach(function (columns, i) {
    newArray[i] = [];
    columns.forEach(function (item) {
      newArray[i].push(counter);
    });

    counter++;
  });

  return newArray;
};

},{}],4:[function(require,module,exports){
module.exports = function matrixFillSequence(data) {
  var temp = [];
  var counter = 0;
  for (var i = 0; i < data.length; i++) {
    temp[i] = [];
    for (var j = 0; j < data[i].length; j++) {
      temp[i].push(counter);
      counter++;
    }
  }

  return temp;
};

},{}],5:[function(require,module,exports){
module.exports = function matrixFillText(data, text) {
  var array = [];
  var counter = 0;
  for (var i = 0; i < data.length; i++) {
    array[i] = [];
    for (var j = 0; j < data[i].length; j++) {
      array[i].push(text.charAt(counter));
      counter++;
    }
  }

  return array;
};

},{}],6:[function(require,module,exports){
module.exports = function matrixIncrement(data) {
  var newArray = [];
  var counter = 1;
  data.forEach(function (columns, i) {
    newArray[i] = [];
    columns.forEach(function (item) {
      newArray[i].push(counter);
      counter++;
    });

  });

  return newArray;
};

},{}],7:[function(require,module,exports){
module.exports = function renderPlainText(data) {

  var rows = [];
  data.forEach(function (columns) {
    var rowString = columns.join('');
    rows.push(rowString);
  });

  return rows.join('\n');

};

},{}],8:[function(require,module,exports){
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

},{"array-matrix":2}]},{},[8]);
