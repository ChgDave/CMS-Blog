const { User } = require("../models");

const userData = [{ username: "chgdave@gmail.com", password: "123456" }];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
