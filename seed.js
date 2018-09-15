const { Museum, Artwork, Artist } = require('./models');

const main = async () => {
  // Delete everything in the database.
  await Museum.destroy({
    where: {}
  });
  await Artwork.destroy({
    where: {}
  });
  await Artist.destroy({
    where: {}
  });

  // Add seed data here

};

main();