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
