// https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/insertRow
// https://snippet-generator.app/
// Test comment! :)

let units = [
    {
        qty: 1,
        unitOfMeasure: "Pounds",
        desc: "Harman & Heatilator Vacuum Pressure Differential Switch, OEM",
        weight: 0.2,
        value: 20.95,
    },
    {
        qty: 2,
        unitOfMeasure: "Pounds",
        desc: "Misc. Item",
        weight: 5,
        value: 30,
    },
    {
        qty: 1,
        unitOfMeasure: "Pounds",
        desc: "Harman Igniter - AMP-HIFIN",
        weight: 0.1,
        value: 70.99,
    },
];

let itemTable = document.getElementById("commodities"); // get table data

function addItems(obj) {
    // Iterate over an array: for...of
    for (let entries of obj) {
        let newRow = itemTable.insertRow(-1); // Insert row at end of table
        let i = 1;
        // Iterate over an object: for...in
        for (let property in entries) {
            let newCell = newRow.insertCell(obj[i + 1]);
            let newText = document.createTextNode(entries[property]);
            newCell.appendChild(newText);
            i++;
        }
    }
}

addItems(units);

// Get all item weights and put them into an array.
const weights = units.map((itemWeight) => {
    return itemWeight.weight;
});

// Total the weights up
let totalWeight = weights.reduce((total, i) => total + i);
console.log(totalWeight);
