const { User } = require('../models');

const userData = [
  
];

const seedCategories = () => User.bulkCreate(userData);

module.exports = seedCategories;