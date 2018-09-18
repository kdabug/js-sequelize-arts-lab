const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'sequelize_lab_bonus',
  dialect:  'postgres',
  define:   {
    underscored: true,
    returning:   true,
  },
});

// MODELNAME
const Country = sequelize.define('country', {
  code: {
    type:       Sequelize.CHAR(3),
    primaryKey: true,
  },

  name: {
    type:   Sequelize.STRING(64),
    unique: true,
  },
});

// style
const Style = sequelize.define('style', {
  name: {
    type:   Sequelize.STRING(64),
    unique: true,
  },
});

const Artist = sequelize.define('artist', {
  name: {
    type:      Sequelize.STRING(64),
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  birthDate: {
    type: Sequelize.DATEONLY,
    key:  'birth_date',
  },
});

const Media = sequelize.define('media', {
  name: {
    type:   Sequelize.STRING(64),
    unique: true,
  },
});


const Museum = sequelize.define('museum', {
  name: {
    type:      Sequelize.STRING(64),
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  address: {
    type:      Sequelize.STRING(128),
    allowNull: false,
  },
});



const Exhibit = sequelize.define('exhibit', {
  exhibitStart: {
    type: Sequelize.DATEONLY,
    key:  'exhibit_start',
  },
  exhibitEnd: {
    type: Sequelize.DATEONLY,
    key:  'exhibit_end',
  },
});

const Art = sequelize.define('art', {
  title: {
    type:         Sequelize.STRING(255),
    allowNull:    false,
    defaultValue: 'untitled',
  },
  description: Sequelize.TEXT,
});


// Relationships
Art.belongsTo(Artist);
Artist.hasMany(Art);

Museum.belongsTo(Country, { foreignKey: 'country_code' });
Artist.belongsTo(Country, { foreignKey: 'birth_place' });

Museum.belongsToMany(Art, { through: Exhibit });
Art.belongsToMany(Museum, { through: Exhibit });

Art.belongsToMany(Media, { through: 'art_media_xref' });
Media.belongsToMany(Art, { through: 'art_media_xref' });

Museum.belongsToMany(Style, { through: 'museum_style_xref' });
Style.belongsToMany(Museum, { through: 'museum_style_xref' });


// Create the tables in the database.
sequelize.sync();

module.exports = {
/**
 * [6] Export the models from the file
 */
  Museum,
  Art,
  Artist,
  Media,
  Country,
  Exhibit,
  Style,
  sequelize,
};
