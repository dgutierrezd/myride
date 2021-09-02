const db = require("../models");
const express = require("express");
const router = express.Router();

router.post("/new", async (req, res) => {
  let {
    name,
    distance,
    start_time,
    final_time,
    start_location,
    final_location,
    time,
    id_user,
    date,
  } = req.body;

  await db.Ride.create({
    name,
    distance,
    start_time,
    final_time,
    start_location,
    final_location,
    time,
    id_user,
    date,
  })
    .then((ride) => {
      res.status(200).json(ride);
    })
    .catch((error) => {
      res.status(400).send("No se pudo crear el ride");
      console.log(error);
    });
});

router.get("/all", async (req, res) => {
  await db.Ride.findAll({ attributes: { exclude: ["UserId"] } })
    .then((rides) => {
      res.status(200).json(rides);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send("Hubo un error al buscar los rides");
    });
});

router.get("/id/:id", async (req, res) => {
  await db.Ride.findByPk(req.params.id, { attributes: { exclude: ["UserId"] } })
    .then((ride) => {
      res.status(200).json(ride);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send("Hubo un error al buscar el ride");
    });
});

router.put("/:id", async (req, res) => {
  let {
    name,
    distance,
    start_time,
    final_time,
    start_location,
    final_location,
    time,
    id_user,
    date,
  } = req.body;

  await db.Ride.update(
    {
      name,
      distance,
      start_time,
      final_time,
      start_location,
      final_location,
      time,
      id_user,
      date,
    },
    { where: { id: req.params.id } }
  )
    .then((ride) => {
      res.status(200).json(ride);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send("Hubo un error al actualizar el ride");
    });
});

module.exports = router;
