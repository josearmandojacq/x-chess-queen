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
