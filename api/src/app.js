const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const axios = require("axios").default
const cors = require("cors")

require("./db.js");

const server = express();


server.name = "API";
server.use(cors())
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use(express.json());
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});


//get all the data from api using code
server.get('/countrycode/:id',  (req,res) => {
  axios.get(`https://restcountries.eu/rest/v2/alpha/${req.params.id}`)
  .then(response => res.json(response.data))//trae la api y la base de datos
  .catch(error => res.status(500).json({error:"sorry bro"}))


})
//get all the data from api using name
server.get('/countryname/:id', async (req,res) => {
  
  try {
    const response = await   axios.get(`https://restcountries.eu/rest/v2/name/${req.params.id}`)
   res.json(response.data)//trae la api y la base de datos
  } catch (error) {
    if(error.response?.status === 404){
      const country = countries.find(country => country.name === req.params.id)
      if(country) return res.json(country)
      return res.sendStatus(404)
    }
    res.status(500).json({error:"sorry bro"})
  }
  


})

//pretending is the database





server.use("/", routes);



// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
