const seedComment = require('./comment-seeds.js');
const seedNomination = require('./nom-seeds');
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedNomination();
  console.log('\n----- NOMINATION SEEDED -----\n');

  await seedComment();
  console.log('\n----- COMMENT SEEDED -----\n');

  process.exit(0);
};

seedAll();
