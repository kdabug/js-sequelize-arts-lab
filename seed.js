const { Museum, Artwork, Artist } = require('./models');

const main = async () => {
  // [1] Delete everything in the database.
  await Museum.destroy({
    where: {},
  });

  await Artwork.destroy({
    where: {},
  });

  await Artist.destroy({
    where: {},
  });

  // [2] Add seed data here
  /*  const kanye = await Artist.create({
    name: 'Kanye West',
  }); */
};

main();
