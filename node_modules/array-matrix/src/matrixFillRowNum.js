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
