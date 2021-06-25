const { Router } = require("express");
const routes = require("./index.js");
const { v4: uuidv4 } = require("uuid");
const db = require("../db.js");
const activity = Router();




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
              
            await activitySave.addCountry(country); // comes from db relation
            // Seq add the things from country and activity by default, as we state it belongs to each other
         
            return activitySave 
          })
          .then(async (activitySave) => {
            const result = await db.Activity.findOne({
              
              where: { id: activitySave.id }, 
              include: [db.Country], 
            });
            return result;
          })
          .then((activitySave) => res.send(activitySave)) // respuesta OK
          .catch((error) => res.send(error)); 
         
      }


}


  activity.post("/",  (req,res) =>{


    createActivity(req,res)


  })


module.exports = activity;
