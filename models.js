const Sequelize = require('sequelize');

const db = new Sequelize({
  database: 'sequelize_art',
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


 
/**
 * [2] Write a model for artwork. It should include columns for:
 *  - title
 *  - year
 *  - medium
 */



/**
 * [3] Write a model for an artist. It should include columns for:
 *  - name
 */


 

/**
 * [4] Relate museums and artworks with the sequelize methods
 * - `hasMany()`
 * - `belongsTo()`
 */


 


/**
 * [5] Relate artworks and artists with the same methods.
 */

 


// Create the tables in the database.
db.sync();

module.exports = {
/**
 * [6] Export the models from the file
 */

 
};
