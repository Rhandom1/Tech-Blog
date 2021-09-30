const { Post } = require('../models');

const postData = [
  
];

const seedCategories = () => Post.bulkCreate(postData);

module.exports = seedCategories;