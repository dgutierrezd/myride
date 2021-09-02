const db = require("../models");
const express = require("express");
const router = express.Router();

router.post("/new", async (req, res) => {
  let { name, time, id_ride } = req.body;

  await db.Event.create({ name, time, id_ride })
    .then((event) => {
      res.status(200).json(event);
    })
    .catch((error) => {
      res.status(400).send("No se pudo crear el evento");
      console.log(error);
    });
});

router.get("/all", async (req, res) => {
  await db.Event.findAll()
    .then((events) => {
      res.status(200).json(events);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send("Hubo un error al buscar los eventos");
    });
});

router.get("/id/:id", async (req, res) => {
  await db.Event.findByPk(req.params.id)
    .then((event) => {
      res.status(200).json(event);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send("Hubo un error al buscar el evento");
    });
});

module.exports = router;
