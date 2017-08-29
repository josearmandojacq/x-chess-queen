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
