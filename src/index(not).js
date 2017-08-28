///////// adding the event listener /////////////

function addCellListener(matrix){
  matrix.forEach(function(rowArray, i){
    rowArray.forEach(function(td, j){
      td.addEventListener("click", function(item){

        highlight2(matrix, i,j);
      });
    });
  });
}


////////// rendering the board /////////////////////

function renderChessBoard(table){

  
  var matrix = [];
  for(var i = 0; i < 8; i++){
    var tr = document.createElement("tr");
    matrix[i] = [];
    for(var t = 0; t < 8; t++){
      var td = document.createElement("td");
      tr.appendChild(td);
      matrix[i].push(td);


      if((i - t) % 2 !== 0){
        td.classList.add("black");
      }
    }

    table.appendChild(tr);
  }
  return matrix;
}



 ///////////////// Highlighting ///////////



function highlight2(matrix, rowNum, columNum) {
  matrix.forEach(function(row, rowIdx) {
    row.forEach(function(cell, colIdx) {
      if (_shouldHighlight(rowNum, columNum, rowIdx, colIdx)) {
        cell.classList.add("highlight");
      } else {
        cell.classList.remove("highlight");
      }
    });
  });

  function _shouldHighlight(crtRowNum, crtColumNum, rowNum, columNum) {


    return (
      crtRowNum - rowNum === crtColumNum - columNum ||
      (crtRowNum - rowNum) * -1 === crtColumNum - columNum ||
      crtRowNum === rowNum ||
      crtColumNum === columNum
    );
  }
}

function highlight3(matrix, rowNum, columNum) {

}


////////////// Calling the functions /////////////


var table = document.querySelector("table");
addCellListener(renderChessBoard(table));
