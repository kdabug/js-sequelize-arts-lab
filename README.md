# Sequelize Lab

You and your team are building a JavaScript application to allow art-interested folks to browse museums and see artwork that each contains.

## Create a database

Create a database in `psql` for the lab, called `sequelize_lab`

## Create a `models.js` file

1. Open the `models.js` file.
1. Write a Sequelize model for museums. It should include columns for:
   - name
   - address
   - description
1. Write a model for artwork. It should include columns for:
   - title
   - year
   - medium
1. Write a model for an artist. It should include columns for:
   - name
1. Relate museums and artworks with the sequelize `hasMany()` and `belongsTo()` methods.
1. Relate artworks and artists with the same methods.
1. Export the models from the file

Run `node models.js` to apply the model changes to the database, and read the output to make sure nothing goes wrong.

## Seed

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