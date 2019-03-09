const { Museum, Artwork, Artist } = require("./models");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// [1] Write a Sequelize query to find the Whitney from the database.
const findWhitney = async () => {
  const whitney = await Museum.findOne({
    where: {
      name: {
        [Op.like]: "%Whitney%"
      }
    }
  });
  console.log("*****1****", whitney.name);
};

// [2] Use the `getArtworks()` method and log the name
// of each artwork at the Whitney.
const whitneyArt = async () => {
  const whitney = await Museum.findOne({
    where: {
      name: {
        [Op.like]: "%Whitney%"
      }
    }
  });
  const whitArt = await whitney.getArtworks();
  //const returnedWhitArt = whitArt.map(art => art.dataValues);
  console.log("*****2****", whitArt);
  return whitArt;
};

// [3] Write a Sequelize query to find "Early Sunday Morning".
const findSunday = async () => {
  const sunday = await Artwork.findOne({
    where: {
      name: {
        [Op.like]: "%Sunday%"
      }
    }
  });
  console.log("*****3****", sunday.title);
  return sunday;
};

// [4] For that artwork, use the `getArtist()` method and log out
// the name of the artist that made it.
const sundayArtist = async () => {
  const sunday = await findSunday();
  const artist = await sunday.getArtist();
  console.log("*****4****", artist);
  return artist;
};

// [5] A new Museum is opening up, "Eric's Museum of Stickers"
const newMuseum = async () => {
  const ericMuseum = await Museum.create({
    name: "Eric's Museum of Stickers"
  });
};

// [6] Based on an article about naming conventions, Eric decides
// to rename the museum. Update the name to "Eric's Museum of Curious Stickers"
// in the database.
const changeMuseumName = async () => {
  const eric = await Museum.findOne({
    where: {
      name: {
        [Op.like]: "%Eric%"
      }
    }
  });
  const newName = eric.update({
    name: "Eric's Museum of Curious Stickers"
  });
  console.log("*****6****", newName.name);
};

// [7] Eric's museum, although appreciated by a niche population,
// doesn't make enough to cover the costs of a Lower East Side
// storefront. Remove the museum from the database.
const deleteMuseum = async () => {
  const eric = await Museum.findOne({
    where: {
      name: {
        [Op.like]: "%Eric%"
      }
    }
  });
  const deleteEric = await eric.destroy();
};

// [8] Write a query to find artworks from before 1950.
const oldArt = async () => {
  const oldArts = await Artwork.findAll({
    where: {
      year: {
        [Op.lte]: 1950
      }
    }
  });
  console.log("*****8****", oldArts);
};

// [9] You decide to take a class in modern art history, and want to
// go see some relevant artworks.
// Write a query to find artworks created after 1940 made out of Oil Paint.

const main = async () => {
  await findWhitney();

  await process.exit();
};

main();
