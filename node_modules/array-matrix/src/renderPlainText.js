module.exports = function renderPlainText(data) {

  var rows = [];
  data.forEach(function (columns) {
    var rowString = columns.join('');
    rows.push(rowString);
  });

  return rows.join('\n');

};
