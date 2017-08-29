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
