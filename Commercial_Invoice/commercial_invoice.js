// https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/insertRow
// https://snippet-generator.app/

let itemTable = document.getElementById("commodities"); // get table data

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
    }
];

// Get all item weights and put them into an array.
const weights = units.map(itemWeight => {
    return itemWeight.weight;
})

// Total the weights up
let totalWeight = weights.reduce((total, i) => total + i);
console.log(totalWeight);