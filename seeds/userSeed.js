const { User } = require('../models');

const userData = [
    {   
        username: "Test1",
        email: "test1@test.com",
        password: "password123"
    },
    {   
        username: "Test2",
        email: "test2@test.com",
        password: "password123"
    },
    {   
        username: "Test3",
        email: "test3@test.com",
        password: "password123"
    }
]


const userSeed = () => User.bulkCreate(userData);

module.exports = userSeed;