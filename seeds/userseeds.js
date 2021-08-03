const { User } = require('../models');

const  userData =[
  {
    "name": "Sal",
    "email": "sal@hotmail.com",
    "password": "password12345"
  },
  {
    "name": "sam",
    "email": "sam@gmail.com",
    "password": "password12345"
  },
  {
    "name": "kimani",
    "email": "kimani@aol.com",
    "password": "password12345"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

