const { Comment } = require('../models');

const commentData = [
  
];

const seedCategories = () => Comment.bulkCreate(commentData);

module.exports = seedCategories;