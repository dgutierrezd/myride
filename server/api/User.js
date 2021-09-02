const db = require("../models");
const express = require("express");
const router = express.Router();

router.post("/register", async (req, res) => {
  let { name, password, birth_day, username, email } = req.body;

  await db.User.create({ name, password, birth_day, username, email })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(400).send("No se pudo crear el usuario");
      console.log(error);
    });
});

router.post("/login", async (req, res) => {
  let { username, password } = req.body;

  await db.User.findOne({ where: { username } })
    .then((user) => {
      console.log(user);
      if (password === user.password) res.status(200).json(user);
      else res.status(404).send("Usuario o contraseña no son válidos");
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send("Hubo un error al buscar el usuario");
    });
});

router.get("/all", async (req, res) => {
  await db.User.findAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send("Hubo un error al buscar los usuarios");
    });
});

router.get("/id/:id", async (req, res) => {
  await db.User.findByPk(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send("Hubo un error al buscar el usuario");
    });
});

module.exports = router;
