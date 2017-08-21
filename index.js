///////// adding the event listener /////////////

function addCellListener(matrix){
  matrix.forEach(function(rowArray, i){
    rowArray.forEach(function(td, j){
      td.addEventListener("click", function(item){
        console.log(i, j);
        highlight2(matrix, i,j);
      });
    });
  });
}


////////// rendering the board /////////////////////

function renderChessBoard(table){

  ////// adding the elements to the table /////////////
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


  // //// putting the color to the board////// need some changes //////////
  // for (var i = 0; i < 8; i++) {
  //   for (var j = 0; j < 8; j++) {
  //     if((i - j) % 2 !== 0){
  //       document.getElementsByTagName('tr')[i].cells[j].classList.add("black");
  //     }
  //   }
  // }

  return matrix;
}


///////////// Hightlighing a Row ////////////////////

function highlightRow(item){
  var parent = item.path[0].parentNode;
  parent.classList.add("highlight");

}

/////////// Hightlighing a Column //////////////////

function highlightColumn(matrix, rowNum){
  matrix.forEach(function(rowArray){
    rowArray[rowNum].classList.add("highlight");

  });
}

///////// Remove Highlighting ///////////////

function removeHighlight(matrix){
  var rows = document.querySelectorAll("tr");
  var columns = document.querySelectorAll("td");

  for (var i = 0; i < 8; i++) {
    rows[i].classList.remove("highlight");
  }
  for (var i = 0; i < 64; i++) {
    columns[i].classList.remove("highlight");
  }
}

 ///////////////// Highlighting the diagonals ///////////

 function highlightDiagonals(matrix, rowNum,columNum){
   var temp = [];
   var i = rowNum;
   var j = columNum;

      while(i >= 0 && j >= 0){
        if(matrix[i][j]){
          temp.push(matrix[i][j]);

        }
        i--;
        j--;
      }

      var i = rowNum;
      var j = columNum;

      while(i >= 0 && j <= 8){
        if(matrix[i][j]){
          temp.push(matrix[i][j]);

        }
        i--;
        j++;
      }

      var i = rowNum;
      var j = columNum;

      while(i <= 7 && j >= 0){
        if(matrix[i][j]){
          temp.push(matrix[i][j]);

        }
        i++;
        j--;
      }

      var i = rowNum;
      var j = columNum;

      while(i <= 7 && j <= 7){

        if(matrix[i][j]){
          temp.push(matrix[i][j]);
        }
        i++;
        j++;
      }





       /*if(matrix[rowNum][columNum]){
         temp.push(matrix[rowNum][columNum]);
         rowNum++;
         columNum++;
       }*/
       temp.forEach(function(item){
         item.classList.add("highlight");
       });



   console.log(temp);
 }

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
