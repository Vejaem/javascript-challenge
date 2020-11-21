// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody=d3.select("tbody");
data.forEach((ufosighting) => {
    var row = tbody.append("tr");
    Object.entries(ufosighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

var buttonCol = d3.select("#filter-btn")
var dateCol = d3.select("#datetime")
var stateCol = d3.select("#state")
var countryCol = d3.select("#country")
var shapeCol = d3.select("#shape")
