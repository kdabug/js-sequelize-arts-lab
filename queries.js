const { Museum, Artwork, Artist } = require('./models');

const main = async () => {
  // [1] Write a Sequelize query to find the Whitney from the database.

  const whitney = await Museum.findOne({
    where: {
      name: {
        $like: '%Whitney%',
      },
    },
  });

  // [2] Use the `getArtworks()` method and log the name
  // of each artwork at the Whitney.

  // [3] Write a Sequelize query to find "Early Sunday Morning".

  // [4] For that artwork, use the `getArtist()` method and log out
  // the name of the artist that made it.

  // [5] A new Museum is opening up, "Eric's Museum of Stickers"

  // [6] Based on an article about naming conventions, Eric decides
  // to rename the museum. Update the name to "Eric's Museum of Curious Stickers"
  // in the database.

  // [7] Eric's museum, although appreciated by a niche population,
  // doesn't make enough to cover the costs of a Lower East Side
  // storefront. Remove the museum from the database.

  // [8] Write a query to find artworks from before 1950.

  // [9] You decide to take a class in modern art history, and want to
  // go see some relevant artworks.
  // Write a query to find artworks created after 1940 made out of Oil Paint.
};

main();
