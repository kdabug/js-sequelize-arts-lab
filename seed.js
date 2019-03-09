const { Museum, Artist, Artwork } = require("./models");

const main = async () => {
  // [1] Delete everything in the database.
  await Artwork.destroy({
    where: {}
  });
  await Artist.destroy({
    where: {}
  });
  await Museum.destroy({
    where: {}
  });

  // [2] Using your museum models, create two museums:
  // a. The Whitney Museums
  // b. Cooper-Hewitt Smithsonian Design Museum

  const whitney = await Museum.create({
    name: "The Whitney Museums"
  });
  const cooperHewitt = await Museum.create({
    name: "Cooper-Hewitt Smithsonian Design Museum"
  });

  // [3] Using your artists models, create three artists:
  // a. Edward Hopper
  // b. Elizabeth Murray
  // c. Louis Comfort Tiffany

  const hopper = await Artist.create({
    name: "Edward Hopper"
  });
  const murray = await Artist.create({
    name: "Elizabeth Murray"
  });
  const tiffany = await Artist.create({
    name: "Louis Comfort Tiffany"
  });

  // [4] Using your artworks models, create three artworks:
  // a. Early Sunday Morning (1930, Oil Paint) by Edward Hopper, owned by the Whitney
  // b. Children Meeting (1978, Oil Paint) by Elizabeth Murray, owned by the Whitney
  // c. Peacock Vase (1890, Glass) by Louis Comfort Tiffany, owned by the Cooper-Hewitt
};

const sunday = await Artwork.create({
  title: "Early Sunday Morning",
  year: 1930,
  medium: "Oil Paint"
});
const children = await Artwork.create({
  title: "Children Meeting",
  year: 1978,
  medium: "Oil Paint"
});
const vase = await Artwork.create({
  title: "Peacock Vase",
  year: 1890,
  medium: "Glass"
});

await sunday.setArtist(hopper);
await sunday.setMuseum(whitney);
await children.setArtist(murray);
await children.setMuseum(whitney);
await vase.setArtist(tiffany);
await vase.setMuseum(cooperHewitt);

main();

//If you run your seed file in the terminal, you will receive an error. Can you figure out why?
