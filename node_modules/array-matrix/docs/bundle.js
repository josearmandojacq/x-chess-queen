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
// function createMatrix(rowsCount, columnsCount) {
//   var matrix = [];

//   if (rowsCount !== 0 && columnsCount !== 0) {
//     for (var i = 0; i < rowsCount; i++) {
//       matrix[i] = [];
//       for (var j = 0; j < columnsCount; j++) {
//         matrix[i].push(0);
//       }
//     }

//     return matrix;
//   }else {
//     alert('No valids arguments');
//     return;
//   }
// }
var createMatrix = require('./createMatrix');

///////////////////////////////////////////////////////////////
// function renderPlainText(data) {

//   var rows = [];
//   data.forEach(function (columns) {
//     var rowString = columns.join('');
//     rows.push(rowString);
//   });

//   return rows.join('\n');

// }

var renderPlainText = require('./renderPlainText');

///////////////////////////////////////////////////////////////////

// function renderTableHTMLString(data) {
//   var htmlString = '';

//   data.forEach(function (columns) {
//     htmlString += '<tr>';

//     columns.forEach(function (cell) {
//       htmlString += '<td>' + cell + '</td>';
//     });

//     htmlString += '</tr>';
//   });

//   return htmlString;
// }

var renderTableHTMLString = require('./renderTableHTMLString');

///////////////////////////////////////////////////////////

// function matrixFillSequence(data) {
//   var temp = [];
//   var counter = 0;
//   for (var i = 0; i < data.length; i++) {
//     temp[i] = [];
//     for (var j = 0; j < data[i].length; j++) {
//       temp[i].push(counter);
//       counter++;
//     }
//   }

//   return temp;
// }

var matrixFillSequence = require('./matrixFillSequence');

//////////////////////   5 and 6    ////////////////////////////////////

// function matrixFillRowNum(data) {
//   var counter = 0;
//   console.log(data);
//   var newArray = [];

//   for(var i = 0; i < data.length; i++){
//     newArray[i] = [];
//     for(var j = 0; j < data[i].length; j++){
//       newArray[i].push(counter);

//     }
//     counter++;
//   }

//   data.forEach(function (columns, i) {
//     newArray[i] = [];
//     columns.forEach(function (item) {
//       newArray[i].push(counter);
//     });

//     counter++;
//   });

//   return newArray;
// }

var matrixFillRowNum = require('./matrixFillRowNum');

////////////////  7       /////////////////////////

// function matrixIncrement(data) {
//   var newArray = [];
//   var counter = 1;
//   data.forEach(function (columns, i) {
//     newArray[i] = [];
//     columns.forEach(function (item) {
//       newArray[i].push(counter);
//       counter++;
//     });

//   });

//   return newArray;
// }

var matrixIncrement = require('./matrixIncrement');

//////////////////   8     ///////////////////////
// function matrixFillText(data, text) {
//   var array = [];
//   var counter = 0;
//   for (var i = 0; i < data.length; i++) {
//     array[i] = [];
//     for (var j = 0; j < data[i].length; j++) {
//       array[i].push(text.charAt(counter));
//       counter++;
//     }
//   }

//   return array;
// }

var matrixFillText = require('./matrixFillText');

//////////////// bonus /////////////////////////
function renderTableDom(table, data) {

  for (var i = 0; i < data.length; i++) {
    var tr = document.createElement('tr');
    table.appendChild(tr);
    for (var j = 0; j < data[i].length; j++) {
      var td = document.createElement('td');
      td.innerHTML = data[i][j];
      tr.appendChild(td);
    }
  }

  return table;

}

//////Calling all functions//////////////
var newMatrix = createMatrix(2, 4);

////Step 2//////////////////
document.getElementById('step-2').textContent = renderPlainText(newMatrix);

//////step 3//////////////////
document.querySelector('#step-3').innerHTML = renderTableHTMLString(newMatrix);

//////Step 4/////////////////
newMatrix = matrixFillSequence(createMatrix(4, 4));
document.getElementById('step-4').innerHTML = renderTableHTMLString(newMatrix);

//////Step 5////////////////
newMatrix = createMatrix(5, 2);
console.log(newMatrix);
newMatrix = matrixFillRowNum(newMatrix);
console.log(newMatrix);
document.querySelector('#step-5').textContent = renderPlainText(newMatrix);

///////Step 6////////////////
newMatrix = matrixFillRowNum(createMatrix(4, 5));
document.querySelector('#step-6').textContent = renderPlainText(newMatrix);

///////Step 7////////////////
newMatrix = matrixFillSequence(createMatrix(3, 5));
newMatrix = matrixIncrement(newMatrix);
document.querySelector('#step-7').innerHTML = renderTableHTMLString(newMatrix);

///////Step 8////////////////
var text = 'abcdefghijkl';
newMatrix = createMatrix(3, 5);
newMatrix = matrixFillText(newMatrix, text);
document.querySelector('#step-8').innerHTML = renderTableHTMLString(newMatrix);

/////////Bonus///////////////
var text = 'abcdefghijkl';
newMatrix = createMatrix(3, 5);
newMatrix = matrixFillText(newMatrix, text);
renderTableDom(document.querySelector('#bonus'), newMatrix);

},{"./createMatrix":1,"./matrixFillRowNum":3,"./matrixFillSequence":4,"./matrixFillText":5,"./matrixIncrement":6,"./renderPlainText":7,"./renderTableHTMLString":8}],3:[function(require,module,exports){
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
module.exports = function renderTableHTMLString(data) {
  var htmlString = '';

  data.forEach(function (columns) {
    htmlString += '<tr>';

    columns.forEach(function (cell) {
      htmlString += '<td>' + cell + '</td>';
    });

    htmlString += '</tr>';
  });

  return htmlString;
};

},{}]},{},[2]);
