# Sequelize Lab (45 minutes)

## Learning Objectives

- Build out a schema and models from technical specifications
- Query a DB table using an ORM

You and your team are building a JavaScript application to allow art-interested folks to browse museums and see artwork that each contains.

1. Create a database for the lab, called `sequelize_lab`
1. Open the `models.js` file and follow the prompts
1. Run `node models.js` to apply the model changes to the database, and read the output to make sure nothing goes wrong.
1. Open up the `seed.js` file, and create two museums:
    - The Whitney Museum
    - Cooper-Hewitt Smithsonian Design Museum
1. Create three artworks:
    - Early Sunday Morning (1930, Oil Paint) by Edward Hopper, owned by the Whitney
    - Children Meeting (1978, Oil Paint) by Elizabeth Murray, owned by the Whitney
    - Peacock Vase (1890, Glass) by Louis Comfort Tiffany, owned by the Cooper-Hewitt

**Make sure you're relating your instances with the `setMuseum()` and `setArtist()` methods!**

## Queries

Practice queries in the `queries.js` file



# Bonus
Check out the `bonus` folder and rebuild your sequelize schema to match *EXACTLY*
1. Make a branch here called `bonus-solution`.
2. Create a new database name `art_museum`, and update your connection in `models.js`.
3. Find a partner and get crackin'!

> hint: check your work against the actual psql schema.   

## Resources
- http://docs.sequelizejs.com/class/lib/model.js~Model.html
- http://docs.sequelizejs.com/variable/index.html#static-variable-DataTypes
- http://docs.sequelizejs.com/class/lib/sequelize.js~Sequelize.html
