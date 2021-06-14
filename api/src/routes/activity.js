const { Router } = require("express");
const routes = require("./index.js");
const { v4: uuidv4 } = require("uuid");
const db = require("../db.js");
const activity = Router();


function processActivity(props) {
    return {
      id: props.id,
      name: props.name,
      duration: props.duration,
      season: props.season,
      difficulty: props.difficulty,
      country:props.country,
    };
  }

const createActivity = async (req, res) => {

    let {name, duration, difficulty, season, country} =  req.body;

    console.log(req.body)
    
    if (!name || !difficulty || !duration || !season || !country){
        console.log(req.body)
    res.status(404).send("There are no enough info for this activity");
      }else{
        let name = req.body.name.toUpperCase();

        const id = uuidv4();
        db.Activity.create({
            
            id,
            name,
            difficulty,
            duration,
            season
          })
          
          .then(async (activitySave) => {
              
            await activitySave.addCountry(country); // el metodo addcountry viene de la relacion en DB
            // Seq agrega los metodos de addcountry y addactivity por defect ( por las relacion en db)
            // add de countries es una promesa // aca agrego el country
            return activitySave // aca le agrego el pais a la actividad creada
          })
          .then(async (activitySave) => {
            const result = await db.Activity.findOne({
              // uso un method de seq para hallar un elemento
              where: { id: activitySave.id }, // tengo que comentar esto.
              include: [db.Country], // incluyo el country que tiene la actividad. // aca busco el country
            });
            return result;
          })
          .then((activitySave) => res.send(activitySave)) // respuesta OK
          .catch((error) => res.send(error)); // valido si hay error al crear
         
      }


}


  activity.post("/",  (req,res) =>{


    createActivity(req,res)


  })


module.exports = activity;
