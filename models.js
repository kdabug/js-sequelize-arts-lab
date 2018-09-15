const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'sequelize_lab',
  dialect: 'postgres',
});



// Create the tables in the database.
sequelize.sync();

module.exports = {
  Artist,
  Museum,
  Artwork
};