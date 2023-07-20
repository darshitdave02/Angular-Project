"use strict";

const fs = require("fs");
const { parse } = require("@fast-csv/parse");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const allRows = [];

    await new Promise((resolve) => {
      fs.createReadStream(__dirname + "/compound.csv")
        .pipe(
          parse({
            headers: true,
          })
        )
        .on("error", (error) => console.error(error))
        .on("data", (row) => {
          allRows.push({
            id: row.CompoundID,
            name: row.CompoundName,
            description: row.CompounrDescription,
            imageUrl: row.strImageSource,
            createdAt: new Date(),
            updatedAt: new Date(),
          });
        })
        .on("end", () => {
          resolve();
        });
    });
    return await queryInterface.bulkInsert("Compounds", allRows);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete("Compounds", null);
  },
};
