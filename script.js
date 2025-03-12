// TH - Table Header
// TD - Table Data

// I did all of this through repeated for loops. (Not sure if this is the best way to do it)

// On window load, create a table element
window.addEventListener('load', function() {
    let table = document.createElement('table');

    // Create the header row
    let headerRow = document.createElement('tr');
    // Header information
    let headers = ['Car', 'Top', 'Price'];
    // For loop to create the header
    for (let i = 0; i < headers.length; i++) {
        // Create table header element
        let th = document.createElement('th');
        // Set the text content of the current header to the header information
        th.textContent = headers[i];
        // Append the header to the header row
        headerRow.appendChild(th);
    }
    // Append the header row to the table
    table.appendChild(headerRow);

    // Data row Information
    let data = [
        ['Chevrolet', '120mph', '$10,000'],
        ['Pontiac', '140mph', '$20,000']
    ];
    // Nested for loop to create the data rows

    // For each list in the data array
    for (let i = 0; i < data.length; i++) {
        let row = document.createElement('tr');
        // For each element in the list
        for (let j = 0; j < data[i].length; j++) {
            // Create td
            let td = document.createElement('td');
            // Set the text content of the td to the data in the list in the data array
            td.textContent = data[i][j];
            // Append the td to the row (With the altered text content)
            row.appendChild(td);
        }
        // Append the row to the table
        table.appendChild(row);
    }

    // Apply styles
    table.style.border = '2px solid black'; // Style 1: Border
    table.style.width = '100%'; // Style 2 Width
    table.style.textAlign = "center"; // Allign the text to the center
    table.style.borderRadius = '10px'; // Style 4: Rounded corners
    table.style.backgroundColor = 'lightblue'; // Style 5: Background color
    table.style.margin = 'auto'; // Style 6: Center the table
    table.style.fontFamily = ''; // Style 7: Font family
    

    // Apply styles using setAttribute method
    table.setAttribute('cellpadding', '20'); // Style 8: Cell padding
    table.setAttribute('cellspacing', '5'); // Style 9: Cell spacing
    
    
    // Append the table to the body, with all the style customizations and 
    document.body.appendChild(table);
});