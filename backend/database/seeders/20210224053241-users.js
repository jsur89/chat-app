"use strict";
var faker = require("faker");
const bcrypt = require("bcrypt");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("Users", [
      {
        firstName: "Mike",
        lastName: "Smith",
        email: "mrios@fullstack.com",
        password: bcrypt.hashSync("secret", 10),
        gender: "Male",
      },
      {
        firstName: "Chloe",
        lastName: "Myers",
        email: "cmyers@fullstack.com",
        password: "password",
        gender: "Female",
      },
      {
        firstName: "Aaron",
        lastName: "Schatz",
        email: "mschatz@fullstack.com",
        password: "password",
        gender: "Male",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Users", null, {});
  },
};
