const express = require("express");
const cors = require("cors");
const UsersApi = require("./api/User");
const RidesApi = require("./api/Ride");
const EventsApi = require("./api/Event");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/users", UsersApi);
app.use("/api/rides", RidesApi);
app.use("/api/events", EventsApi);

const port = 4000;

app.listen(port, () => console.log(`Servidor corriendo en ${port}`));
