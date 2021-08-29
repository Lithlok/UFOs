// import the data from data.js
const tableData = data;

// Reference the HTML table using d3.
var tbody = d3.select("tbody");

function buildTable(data) {
    // Clear any existing data.
    tbody.html("");

    // Loop through each object and append a row and cells 
    // for each value in the row.
    data.forEach((dataRow) => {
        // Append row to table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add each
        // value as a table cell (td).
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

function handleClick(){
    // Get the datetime value from the filter.
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check if date entered and filter data using it.
    if (date) {
        // Apply 'filter' to table data to keep only the rows
        // where 'datetime' value matches the filter value.
        filteredData = filteredData.filter(row => row.datetime ===date);
    };
    // Rebuild the table.
    buildTable(filteredData);
}

// Attach an event to listen for the form button.
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads.
buildTable(tableData);