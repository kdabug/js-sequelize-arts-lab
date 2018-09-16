const { sequelize } = require('./models');

const main = async () => {
  // note: this will read from your models and won't work unless they're defined.
  await sequelize.sync({ force: true });
  process.exit();
};

main();
