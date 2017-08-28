(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
///////// adding the event listener /////////////

/*function addCellListener(matrix){
  matrix.forEach(function(rowArray, i){
    rowArray.forEach(function(td, j){
      td.addEventListener('click', function(item){
        console.log(i, j);
        highlight2(matrix, i,j);
      });
    });
  });
}*/



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

///////////////// Highlighting ///////////

/*function highlight2(matrix, rowNum, columNum) {
  matrix.forEach(function (row, rowIdx) {
    row.forEach(function (cell, colIdx) {
      if (_shouldHighlight(rowNum, columNum, rowIdx, colIdx)) {
        cell.classList.add('chessboard__cell--highlight');
      } else {
        cell.classList.remove('chessboard__cell--highlight');
      }
    });
  });

  function _shouldHighlight(crtRowNum, crtColumNum, rowNum, columNum) {
    console.log('currentRowNum:' + crtRowNum, 'crtColumNum:' + crtColumNum, 'rowNum' + rowNum, 'columNum:' + columNum);
    return (
      crtRowNum - rowNum === crtColumNum - columNum ||
      (crtRowNum - rowNum) * -1 === crtColumNum - columNum ||
      crtRowNum === rowNum ||
      crtColumNum === columNum
    );
  }
}*/


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


  //divCell.classList.add('chessboard__cell--highlight');
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

},{}]},{},[1]);
