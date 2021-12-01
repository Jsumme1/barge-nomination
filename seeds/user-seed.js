
const sequelize = require('../config/connection');
const { User, Nomination, Comment} = require('../models');

//  role should be drop down - scheduler, inspector, terminal

const userdata = [
  {
    firstname: "Julie",
    lastname: "Summers",
    role: "scheduler",
    email: "julie@julie.com",
    password: "password123",
  },

  {
    firstname: "Vinny",
    lastname: "Millan",
    role: "inspector",
    email: "vinny@vinny.com",
    password: "password123",
  },

  {
    firstname: "John",
    lastname: "Millhouse",
    role: "terminal",
    email: "john@john.com",
    password: "password123",
  },

];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;