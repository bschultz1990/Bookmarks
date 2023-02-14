// Change the ton price. Bags are automatically calculated.

let item = {
  easyheat: {
    name: "Easy Heat (Hard)",
    sku: "EASY HEAT-BAG",
    bc_bag: 0,
    pf_bag: 0,
    rt_bag: 0,
    bc_ton: 280,
    pf_ton: 295,
    rt_ton: 310,
  },
  pinnacle: {
    name: "Pinnacle Fir ",
    sku: "PINNACLE FIR - BAG",
    bc_bag: 0,
    pf_bag: 0,
    rt_bag: 0,
    bc_ton: 371,
    pf_ton: 400,
    rt_ton: 415,
  },
  propellet: {
    name: "ProPellet (Hard)",
    sku: "PROPELLET - BAG",
    bc_bag: 0,
    pf_bag: 0,
    rt_bag: 0,
    bc_ton: 290,
    pf_ton: 305,
    rt_ton: 320,
  },
  haycreek: {
    name: "Hay Creek",
    sku: "HAY CREEK-Bag",
    bc_bag: 0,
    pf_bag: 0,
    rt_bag: 0,
    bc_ton: 247,
    pf_ton: 293,
    rt_ton: 308,
  },
  marth: {
    name: "Marth (Hard)",
    sku: "MARTH - BAG",
    bc_bag: 0,
    pf_bag: 0,
    rt_bag: 0,
    bc_ton: 276,
    pf_ton: 309,
    rt_ton: 324,
  },
  ujsoftwood: {
    name: "UJ Softwood",
    sku: "UJ SOFTWOOD -Bag",
    bc_bag: 0,
    pf_bag: 0,
    rt_bag: 0,
    bc_ton: 286,
    pf_ton: 335,
    rt_ton: 350,
  },
  we: {
    name: "Western Elite (60 Bags)",
    sku: "WE PONDO PINE (RED)",
    bc_bag: 0,
    pf_bag: 0,
    rt_bag: 0,
    bc_ton: 396,
    pf_ton: 441,
    rt_ton: 459,
  },
  ujdouglasfir: {
    name: "UJ Douglas Fir-Bear Mtn.",
    sku: "UJ DOUG FIR BEAR MTN - BAG",
    bc_bag: 0,
    pf_bag: 0,
    rt_bag: 0,
    bc_ton: 402,
    pf_ton: 448,
    rt_ton: 463,
  },
  ujbulk: {
    name: "UJ Bulk",
    sku: "UJ BULK - BAG",
    bc_ton: 266,
    pf_ton: 0,
    rt_ton: 320,
  },
};

// Assign tonnage to each item
for (let element in item) {
  // If the element does not equal ujbulk, do the following:
  if (element != "ujbulk") {
    item[element].bc_bag = item[element].bc_ton / 50;
    item[element].pf_bag = item[element].pf_ton / 50;
    item[element].rt_bag = item[element].rt_ton / 50;
  }
}

// Assign Western Elite (60 Bags)
item.we.bc_bag = item.we.bc_ton / 60;
item.we.pf_bag = item.we.pf_ton / 60;
item.we.rt_bag = item.we.rt_ton / 60;

// Assign UJ Bulk. pf_ton = rt_ton -15. bc_ton = pf_ton -15.
// item.ujbulk.pf_ton = item.ujbulk.rt_ton - 15;
// item.ujbulk.bc_ton = item.ujbulk.pf_ton - 15;

// console.log(item);
console.log(item)
