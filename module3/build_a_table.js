// create a function that would take user's data
const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];


function createTable(data) {
    // create table element
    let table = document.createElement("table");

    // Get the property names of at least one object and store it in an array
    let properties = Object.keys(data[0])
    
    // create header row
    let headerRow = document.createElement('tr')

    // loop through the array and 
    properties.forEach((element) => {
        let header = document.createElement('th');
        header.appendChild(document.createTextNode(element))
        headerRow.appendChild(header)
    });

    // append to table the header rows
    table.appendChild(headerRow);

    // loop through the data
    data.forEach(function(object) {

        // create row
        let row = document.createElement("tr");


        properties.forEach((field) => {

        // create cell
          let cell = document.createElement("td");

        // append text to the cell
          cell.appendChild(document.createTextNode(object[field]));

        //   check for numbers so you can right align them
          if (typeof object[field] == "number") {
            cell.style.textAlign = "right";
          }
        //   append row with new cell created
          row.appendChild(cell);
        });

        // append table with the new created row
        table.appendChild(row);
      });

    return table;
}

// append to the div with the mountain id
document.getElementById("mountains").appendChild(createTable(MOUNTAINS))