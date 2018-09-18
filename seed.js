const { Museum, Art, Artist } = require('./models');

const main = async () => {
  // [1] Delete everything in the database.
  await Museum.destroy({
    where: {},
  });

  await Art.destroy({
    where: {},
  });

  await Artist.destroy({
    where: {},
  });

  // [2] Add seed data here
  /*  const kanye = await Artist.create({
    name: 'Kanye West',
  }); */

  const [whitney, cooper] = await Museum.bulkCreate([{
    name: 'The Whitney Museum',
  }, {
    name: 'Cooper-Hewitt Smithsonian Design Museum',
  }]);

  const [earlySundayMorning, childrenMeeting, peacockVase] = await Art.bulkCreate([{
    title:  'Early Sunday Morning',
    year:   1930,
    medium: 'Oil Paint',
  }, {
    title:  'Children Meeting',
    year:   1978,
    medium: 'Oil Paint',
  }, {
    title:  'Peacock Vase',
    year:   1890,
    medium: 'Glass',
  }]);

  const [hopper, murray, tiffany] = await Artist.bulkCreate([{
    name: 'Edward Hopper',
  }, {
    name: 'Elizabeth Murray',
  }, {
    name: 'Louis Comfort Tiffany',
  }]);

  await earlySundayMorning.setArtist(hopper);
  await childrenMeeting.setArtist(murray);
  await peacockVase.setArtist(tiffany);

  whitney.setArts([earlySundayMorning, childrenMeeting]);
  cooper.setArts(peacockVase);


  console.log(cooper);
};


main();
