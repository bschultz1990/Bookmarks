// https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/insertRow
// https://snippet-generator.app/

let units = [
    [
        1,
        "Pounds",
        "Harman & Heatilator Vacuum Pressure Differential Switch, OEM",
        0.2,
        20.95,
    ],
    [2, "Pounds", "Misc. Item", 5, 30],
    [1, "Pounds", "Harman Igniter - AMP-HIFIN", 1.5, 70.99],
];

let itemTable = document.getElementById("commodities"); // get table data

function addItems(array) {
    // Iterate over an array: for... of
    for (let entries of array) {
        let newRow = itemTable.insertRow(-1); // Insert new row at end of table
        for (let property in entries) {
            let newCell = newRow.insertCell(array[property + 1]);
            let newText = document.createTextNode(entries[property]);
            newCell.appendChild(newText);
            // TODO: Center Qty., Measure, and Wt. cell <td>s.
            if (property + 1 == 1 || property + 1 == 2 || property + 1 == 4) {
                newCell.classList.add("td-center");
            }
        }
    }
}

function addWeights() {
    // iterate over an array. Get all the weights (index[3] of each item.)
    let weights = [];
    for (let line of units) {
        weights.push(line[3]); // push weight column into its own array
    }
    // total the weights up
    return (totalWeight = weights.reduce((total, i) => total + i));
}

addItems(units);
addWeights();

// assign total weight;
let shipTotalWeight = document.getElementById("totalweight");
shipTotalWeight.innerText = totalWeight + " lbs.";
