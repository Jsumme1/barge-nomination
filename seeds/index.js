const seedComments = require('./comment-seed.js');
const seedNominations = require('./nom-seed');
const seedUsers = require('./user-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
   await sequelize.sync({ force: true });
   console.log("--------------");

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedNominations();
  console.log('\n----- NOMINATION SEEDED -----\n');

  await seedComments();
  console.log('\n----- COMMENT SEEDED -----\n');

  process.exit(0);
};

seedAll();
