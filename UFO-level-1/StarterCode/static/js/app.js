// from data.js
var tableData = data;

// YOUR CODE HERE!
// YOUR CODE HERE!
// select the table body tag and add the data in html
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select("#form");

data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var entry = row.append("td");
      entry.text(value);
    });
  });


button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {


    d3.event.preventDefault();
    
    var inputDate = d3.select("#datetime");
  

    var inputVal = inputDate.property("value");
  
    console.log(inputValue);

    var filterDate = tableData.filter(tableData => tableData.datetime === inputVal);
  
    console.log(filterDate);
  
    
    tbody.html("");
    filteredData.forEach((sighting) => {
      var row = tbody.append("tr");
      Object.entries(signting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  };