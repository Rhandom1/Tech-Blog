const sequelize = require('../config/connection');

const userSeed = require('./userSeed');
const postSeed = require('./postSeed');
const commentSeed = require('./commentSeed');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
       
    await userSeed();
    console.log('users seed = SUCCESS')

    await postSeed();
    console.log('posts seed = SUCCESS')

    await commentSeed();
    console.log('comments seed = SUCCESS')

    process.exit(0);
};

seedDatabase();