import React, { useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from "@material-ui/core";
import ClockTime from "./ClockTime";
import axios from "axios";
import { ROUTE_API } from "../Constants";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const Ride = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const addEvent = () => {
    let ride = JSON.parse(localStorage.getItem("ride"));
    axios
      .post(`${ROUTE_API}/events/new`, {
        name,
        time: `${minutes}:${seconds}`,
        id_ride: ride.id,
      })
      .then((res) => {
        console.log(res);
        Swal.fire(
          "Evento creado",
          "El evento se ha creado exitosamente",
          "success"
        );
        setName("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container component="main" maxWidth="md">
      <div>
        <Typography component="h1" variant="h4">
          Ride
        </Typography>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={6}>
            <Box mt={6}>
              <ClockTime
                seconds={seconds}
                setSeconds={setSeconds}
                minutes={minutes}
                setMinutes={setMinutes}
              />
            </Box>
            <Box mt={7}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="event"
                    variant="outlined"
                    required
                    fullWidth
                    id="event"
                    label="Evento"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Button
                  onClick={() => addEvent()}
                  variant="contained"
                  style={{ display: "flex" }}
                >
                  Agregar
                </Button>
              </Grid>
            </Box>
          </Grid>
          <Box justifyContent="flex-end">
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  localStorage.setItem("timeRide", `${minutes}:${seconds}`);
                  history.push("/finish-ride");
                }}
              >
                Finalizar
              </Button>
            </Grid>
          </Box>
        </Grid>
      </div>
    </Container>
  );
};

export default Ride;
