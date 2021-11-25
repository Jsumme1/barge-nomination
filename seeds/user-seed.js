const { User } = require("../models");

const userdata = [
  {
    username: "jsumme2",
    firstname: "Julie",
    lastname: "Summers",
    role: "scheduler",
    email: "julie@julie.com",
    password: "password123",
  },

  {
    username: "Vmillan2",
    firstname: "Vinny",
    lastname: "Millan",
    role: "inspector",
    email: "vinny@vinny.com",
    password: "password123",
  },

  {
    username: "jmillhou2",
    firstname: "John",
    lastname: "Millhouse",
    role: "terminal",
    email: "john@john.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });
module.exports = seedUsers;
