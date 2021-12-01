const { Nomination } = require("../models");

//  nomination fields to be drop down:
// product_name: regular gasoline, premium gasoline, blendstocks
//  inspector_name: AmSpec, Inspectorate, Camin, Intertek, NMK
//  counterparty_name: Phillips 66, BP, Global, GEW, ATMI, Koch

const nomdata = [
  {
    title: "RTC 107 Loading RBOB 11.25.21",
    barge_name: "RTC 107",
    move_date: 11 / 25 / 2021,
    quantity: 10000,
    product_name: "regular gasoline",
    tank_number: 65,
    inspector_name: "AmSpec",
    counterparty_name: "Phillips 66",
  },

  {
    title: "DS 504 Loading RBOB 11.26.21",
    barge_name: "DS 504",
    move_date: 11 / 26 / 2021,
    quantity: 50000,
    product_name: "regular gasoline",
    tank_number: "100 - 16",
    inspector_name: "Camin",
    counterparty_name: "BP",
  },

  {
    title: "DBL 101 Loading PBOB 11.28.21",
    barge_name: "DBL 101",
    move_date: 11 / 28 / 2021,
    quantity: 75000,
    product_name: "premium gasoline",
    tank_number: "260-3",
    inspector_name: "Intertek",
    counterparty_name: "Inspectorate",
  },
];

const seedNominations = () => Nomination.bulkCreate(nomdata);

module.exports = seedNominations;