import React, { useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from "@material-ui/core";
import axios from "axios";
import { ROUTE_API } from "../Constants";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const StartRide = () => {
  const history = useHistory();

  const [start_location, setStartLocation] = useState("");
  const [name, setName] = useState("");

  const createRide = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    axios
      .post(`${ROUTE_API}/rides/new`, {
        start_location,
        name,
        id_user: user.id,
        date: new Date(),
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("ride", JSON.stringify(res.data));
        history.push("/ride");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const validateRide = () => {
    let dateNow = new Date();
    if (
      dateNow.getTime() >= new Date("2021-09-01").getTime() &&
      dateNow.getTime() <= new Date("2021-09-05").getTime()
    ) {
      createRide();
    } else {
      Swal.fire(
        "No puedes iniciar tu Ride",
        "No estas dentro de la fecha establecida",
        "error"
      );
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <div>
        <Typography component="h1" variant="h4">
          Nuevo Ride
        </Typography>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={6}>
            <Box mt={7}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="name"
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    label="Nombre del ride"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="startLocation"
                    variant="outlined"
                    required
                    fullWidth
                    id="startLocation"
                    label="Lugar de partida"
                    type="text"
                    value={start_location}
                    onChange={(e) => setStartLocation(e.target.value)}
                  />
                </Grid>
                <Button
                  onClick={() => validateRide()}
                  variant="contained"
                  color="primary"
                  style={{ display: "flex" }}
                >
                  Iniciar
                </Button>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default StartRide;
