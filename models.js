const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const sequelize = new Sequelize({
  database: "sequelize_art",
  dialect: "postgres",
  define: {
    underscored: true,
    returning: true
  }
});

// Create your models here...

/**
 * [1] Write a Sequelize model for museums. It should include columns for:
 *  - name
 */
const Museum = sequelize.define("museums", {
  name: Sequelize.STRING
});

/**
 * [2] Write a model for artwork. It should include columns for:
 *  - title
 *  - year
 *  - medium
 */
const Artwork = sequelize.define("artworks", {
  title: Sequelize.STRING,
  year: Sequelize.INTEGER,
  medium: Sequelize.STRING
});

/**
 * [3] Write a model for an artist. It should include columns for:
 *  - name
 */

const Artist = sequelize.define("artists", {
  name: Sequelize.STRING
});

/**
 * [4] Relate museums and artworks with the sequelize methods
 * - `hasMany()`
 * - `belongsTo()`
 */
Museum.hasMany(Artwork, { onDelete: "cascade" });
Artwork.belongsTo(Museum);
/**
 * [5] Relate artworks and artists with the same methods.
 */
Artist.hasMany(Artwork, { onDelete: "cascade" });
Artwork.belongsTo(Artist);

module.exports = {
  /**
   * [6] Export the models from the file
   */
  Museum,
  Artist,
  Artwork,
  sequelize,
  Op
};
