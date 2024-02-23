// Google Sheets TSV links
var tsvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRl7Y4ehqh839kTUIiv9C4BreqEwrULUkYuKDLinT_rrB04JmGbmMBWSPM_cBkKPCwYEy8AXmWofjky/pub?gid=114967658&single=true&output=tsv';
var TsvUrl2 = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRl7Y4ehqh839kTUIiv9C4BreqEwrULUkYuKDLinT_rrB04JmGbmMBWSPM_cBkKPCwYEy8AXmWofjky/pub?gid=0&single=true&output=tsv';

var selectedRows = [13, 14];

// Fetch TSV data from the first URL
fetch(tsvUrl)
    .then(response => response.text())
    .then(tsvData => {
        // Split the TSV data into rows and columns
        var columns = tsvData.split('\n').map(row => row.split('\t'));

        // Fetch TSV data from the second URL
        fetch(TsvUrl2)
            .then(response => response.text())
            .then(tsvData2 => {
                // Split the TSV data into rows and columns for the second dataset
                var columns2 = tsvData2.split('\n').map(row => row.split('\t'));

                // Iterate through selected rows from the first dataset
                var selectedColumns = selectedRows.map(rowNum => columns[rowNum - 1]);

                // Find the maximum number of columns among the selected rows
                var maxColumns = selectedColumns[0].filter(value => value !== undefined && value !== null && value !== "").length;

                // Iterate through columns to create HTML elements
                for (var i = 1; i <= maxColumns; i++) {
                    // Check if there is a value in the current column for any selected row
                    var hasValue = selectedColumns.some(col => col[i]);

                    if (hasValue) {
                        // Find a match in the second dataset based on the current column value
                        var currentValue = selectedColumns[0][i];
                        var matchingRow = columns2.find(row => row[1].trim() === currentValue.trim());

                        if (matchingRow) {
                            // Found a match, set the values in the HTML elements
                            var timeValue = matchingRow[0];
                            var htmlElement = `<li>
                                <div>
                                    <p id="time">${timeValue}</p>
                                </div>
                                <div></div>
                                <div>
                                    <h1 id="goal">${currentValue}</h1>
                                    <h2 id="military_power">${selectedColumns[1][i]}</h2>
                                    <p id="time_difference"></p>
                                </div>
                            </li>`;
                            // Update the content of the existing <ul> element
                            var ulElement = document.getElementById('support-list');
                            ulElement.innerHTML += htmlElement;
                        }
                    }
                }
                js1Finished();
                function js1Finished() {
                    // Now include js2.js dynamically after js1 has finished
                    var script = document.createElement('script');
                    script.src = 'js/time.js';
                    document.head.appendChild(script);
                }
                ulElement.style.display = "block";
            })
            .catch(error => console.error('Error fetching second TSV:', error));
    })
    .catch(error => console.error('Error fetching first TSV:', error));