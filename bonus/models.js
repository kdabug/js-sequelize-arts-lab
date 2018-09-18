const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'sequelize_lab_bonus',
  dialect:  'postgres',
  define:   {
    underscored: true,
    returning:   true,
  },
});


// Create your models here...


/**
 * [1] Write a Sequelize model for museums. It should include columns for:
 *  - name
 */

const Museum = sequelize.define('museum', {
  name: Sequelize.STRING,
});

/**
 * [2] Write a model for artwork. It should include columns for:
 *  - title
 *  - year
 *  - medium
 */

const Art = sequelize.define('art', {
  title: {
    type:      Sequelize.STRING,
    allowNull: false,
  },
  year:   Sequelize.DATEONLY,
  medium: {
    type:      Sequelize.STRING,
    allowNull: false,
  },
});

/**
 * [3] Write a model for an artist. It should include columns for:
 *  - name
 */

const Artist = sequelize.define('artist', {
  name: Sequelize.STRING,
});

/**
 * [4] Relate museums and artworks with the sequelize methods
 * - `hasMany()`
 * - `belongsTo()`
 */

Museum.hasMany(Art);
Art.belongsTo(Museum);


/**
 * [5] Relate artworks and artists with the same methods.
 */
Artist.hasMany(Art);
Art.belongsTo(Artist);


// Create the tables in the database.
sequelize.sync();

module.exports = {
/**
 * [6] Export the models from the file
 */
  Museum,
  Art,
  Artist,
  sequelize,
};
