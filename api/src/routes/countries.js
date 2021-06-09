const { Router } = require("express");
const axios = require("axios").default;
const routes = require("./index.js");
const db = require("../db.js");
const countries = Router();
const { Sequelize } = require("sequelize");

// to set the data into the db in case there are no data already
function setCountry(props) {
  return {
    id: props.alpha3Code,
    name: props.name,
    region: props.region,
    subregion: props.subregion,
    capital: props.capital,
    area: props.area,
    population: props.population,
    flag: props.flag,
  };
}

//get all the data from api

const getAllData = async (req, res) => {
  const result = await db.Country.findAll();
  let result10 = await db.Country.findAll({ limit: 10 });

  if (req.query.name) {
    let a = req.query.name[1].toUpperCase();
    let b = req.query.name.substr(2).toLowerCase();
    let c = a + b;
    let countryName = c.substring(0, c.length - 1);

    const result1 = await db.Country.findOne({
      where: { name: countryName },
    });

    if (!result1) {
      res.status(404).send("Country Not found into our database");
    }
    res.send(result1);
  } else {
    if (result.length > 0) {
      console.log("The database already has api data");
      res.send(result10);
    } else {
      const countryData = await axios
        .get("https://restcountries.eu/rest/v2/all")
        .then((response) => response.data.map((item) => setCountry(item)))
        .catch((error) => res.status(500).json({ error: "Error" }));
      //usar os datos que quiero
      //passara base de datos con BulkCreate

      await db.Country.bulkCreate(countryData);
    }
  }
};
countries.get("/", (req, res) => {
  getAllData(req, res);
});

countries.get("/:id", async (req, res) => {
  try {
    if (req.params.id) {
      const result = await db.Country.findOne({
        where: { id: req.params.id.toUpperCase() },
        include: [db.Activity],
      });

      if (!result) {
        res.status(404).send("ID Not found into our database");
      }
      await res.json(result);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server crashed");
  }
});

module.exports = countries;
