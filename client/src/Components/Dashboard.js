import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
  CircularProgress,
  Card,
  CardContent,
} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import { useHistory } from "react-router-dom";

import axios from "axios";
import { ROUTE_API } from "../Constants";

const Dashboard = () => {
  const history = useHistory();

  const [rides, setRides] = useState([]);

  const getRides = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    axios
      .get(`${ROUTE_API}/rides/all`)
      .then((res) => {
        console.log(res.data);
        let userRides = res.data?.filter((rid) => rid.id_user === user.id);
        setRides(userRides);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getRides();
  }, []);

  return (
    <Container component="main" maxWidth="md">
      <div>
        <Typography component="h1" variant="h4">
          Mis Registros
        </Typography>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={6}>
            <List component="nav" aria-label="main mailbox folders">
              {rides?.map((rid) => {
                console.log(rid);
                return (
                  <ListItem key={rid.id}>
                    <ListItemText
                      primary={`${rid.name} - ${rid.distance} Km`}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          <Box justifyContent="flex-end">
            <Grid item xs={6}>
              <Button
                variant="contained"
                onClick={() => history.push("/start-ride")}
              >
                Nuevo Ride
              </Button>
            </Grid>
          </Box>
        </Grid>
      </div>
    </Container>
  );
};

export default Dashboard;
