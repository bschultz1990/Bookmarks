// You'll only need to change the retail pricing of each item. This code calculates the following:
// 1. pf_bag = rt_bag - 0.3.
// 2. bc_bag = pf_bag - 0.3.
// 3. pf_ton = rt_ton - 15.
// 4. bc_ton = pf_ton - 15.

let item = {
  southernhardwood: {
    name: "Southern Hardwood",
    sku: "SOUTHERN HARDWOOD BAGS",
    bc_bag: 0,
    pf_bag: 0,
    rt_bag: 6.02,
    bc_ton: 0,
    pf_ton: 0,
    rt_ton: 0,
  },
  propellet: {
    name: "ProPellet (Hard)",
    sku: "PROPELLET - BAG",
    bc_bag: 0,
    pf_bag: 0,
    rt_bag: 6.1,
    bc_ton: 0,
    pf_ton: 0,
    rt_ton: 0,
  },
  marth: {
    name: "Marth (Hard)",
    sku: "MARTH - BAG",
    bc_bag: 0,
    pf_bag: 0,
    rt_bag: 6.1,
    bc_ton: 0,
    pf_ton: 0,
    rt_ton: 0,
  },
  easyheat: {
    name: "Easy Heat (Hard)",
    sku: "EASY HEAT-BAG",
    bc_bag: 0,
    pf_bag: 0,
    rt_bag: 6.2,
    bc_ton: 0,
    pf_ton: 0,
    rt_ton: 0,
  },
  ujsoftwood: {
    name: "UJ Softwood",
    sku: "UJ SOFTWOOD -Bag",
    bc_bag: 0,
    pf_bag: 0,
    rt_bag: 6.8,
    bc_ton: 0,
    pf_ton: 0,
    rt_ton: 0,
  },
  we: {
    name: "Western Elite (60 Bags)",
    sku: "WE PONDO PINE (RED)",
    bc_bag: 0,
    pf_bag: 0,
    rt_bag: 7.25,
    bc_ton: 0,
    pf_ton: 0,
    rt_ton: 0,
  },
  ujdouglasfir: {
    name: "UJ Douglas Fir-Bear Mtn.",
    sku: "UJ DOUG FIR BEAR MTN - BAG",
    bc_bag: 0,
    pf_bag: 0,
    rt_bag: 9.38,
    bc_ton: 0,
    pf_ton: 0,
    rt_ton: 0,
  },
  pinnacle: {
    name: "Pinnacle Fir ",
    sku: "PINNACLE FIR - BAG",
    bc_bag: 0,
    pf_bag: 0,
    rt_bag: 8.3,
    bc_ton: 0,
    pf_ton: 0,
    rt_ton: 0,
  },
  ujbulk: {
    name: "UJ Bulk",
    sku: "UJ BULK - BAG",
    bc_ton: 0,
    pf_ton: 0,
    rt_ton: 320,
  },
};

// Assign pf_bag and bc_bag pricing:
for (let element in item) {
  if (element != "ujbulk") {
    item[element].pf_bag = Math.round(item[element].rt_bag - 0.3);
    item[element].bc_bag = Math.round(item[element].pf_bag - 0.3);
  }
}

// Assign tonnage to each item
for (let element in item) {
  // If the element does not equal ujbulk, do the following:
  if (element != "ujbulk") {
    item[element].bc_ton = Math.round(item[element].bc_bag * 50);
    item[element].pf_ton = Math.round(item[element].pf_bag * 50);
    item[element].rt_ton = Math.round(item[element].rt_bag * 50);
  }
}

// Assign Western Elite (60 Bags)
item.we.bc_ton = Math.round(item.we.bc_bag * 60);
item.we.pf_ton = Math.round(item.we.pf_bag * 60);
item.we.rt_ton = Math.round(item.we.rt_bag * 60);

// Assign UJ Bulk. pf_ton = rt_ton -15. bc_ton = pf_ton -15.
item.ujbulk.pf_ton = item.ujbulk.rt_ton - 15;
item.ujbulk.bc_ton = item.ujbulk.pf_ton - 15;

console.log(item);
