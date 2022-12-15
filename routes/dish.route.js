const express=require("express")
const userSchema=require("../models/dish.model")

const router = express.Router()

//CREATE DISH
router.post("/dishes",(req,res)=>
  {
    const dish=dishSchema(req.body)
    dish.save().then((data)=>
    res.json(data))
    .catch((error)=>res.json({message:error}))
  }
)

//GET DISH 
router.get("/dish/:id", (req, res) => {
    const { id } = req.params;
    dishSchema
  .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  })

  // UPDATE DISH
router.put("/updatedish/:id", (req, res) => {
    const { id } = req.params;
    const {name, price} = req.body;
    userSchema
      .updateOne({ _id: id }, { $set: {name, price} })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

// DELETE DISH
router.delete("/deletedish/:id", (req, res) => {
    const { id } = req.params;
    const {name, price} = req.body;

    dishSchema
    .updateOne({ _id: id }, { $set: {name, price} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));

  // Find dish by name
  router.getDishByName = (req, res) => {
    const {name} = req.body;

    Dish.find({name: name}, function (error, docs){
        if (error) {
            console.log(error);
            res
                .status(500)
                .send(
                    Error(
                        "Ha ocurrido un error, por favor intenta mas tarde"
                    )
                );
        }
        else {
            res
                .status(200)
                .send(Success(docs));
        }
    })
  }});

  module.exports = router;