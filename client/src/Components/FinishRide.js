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

const FinishRide = () => {
  const history = useHistory();

  const [final_location, setFinalLocation] = useState("");
  const [distance, setDistance] = useState("");

  const updateRide = () => {
    let ride = JSON.parse(localStorage.getItem("ride"));
    let timeRide = localStorage.getItem("timeRide");
    axios
      .put(`${ROUTE_API}/rides/${ride.id}`, {
        name: ride.name,
        distance,
        start_location: ride.start_location,
        final_location,
        time: timeRide,
        id_user: ride.id_user,
        date: ride.date,
      })
      .then((res) => {
        console.log(res);
        localStorage.removeItem("ride");
        localStorage.removeItem("timeRide");
        history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container component="main" maxWidth="md">
      <div>
        <Typography component="h1" variant="h4">
          Finalizar Ride
        </Typography>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={6}>
            <Box mt={7}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="startLocation"
                    variant="outlined"
                    required
                    fullWidth
                    id="startLocation"
                    label="Lugar final del ride"
                    type="text"
                    value={final_location}
                    onChange={(e) => setFinalLocation(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="distance"
                    variant="outlined"
                    required
                    fullWidth
                    id="distance"
                    label="Distancia recorrida"
                    type="text"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                  />
                </Grid>
                <Button
                  onClick={() => updateRide()}
                  variant="contained"
                  color="primary"
                  style={{ display: "flex" }}
                >
                  Terminar Ride
                </Button>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default FinishRide;
