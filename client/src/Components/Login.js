import React, { useState } from "react";
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
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import axios from "axios";
import { ROUTE_API } from "../Constants";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  select: {
    width: "100%",
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginAccount = () => {
    axios
      .post(`${ROUTE_API}/users/login`, { username, password })
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data));
        history.push("dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          Iniciar Sesión
        </Typography>
        <Card raised style={{ marginTop: 5 }}>
          <CardContent>
            <form className={classes.form} noValidate>
              {/* {message ? (
            <Alert severity="error" style={{ marginBottom: 8 }}>
              {message}
            </Alert>
          ) : (
            ""
          )} */}
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="username"
                    variant="outlined"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    autoFocus
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="password"
                    variant="outlined"
                    required
                    fullWidth
                    id="password"
                    label="Contraseña"
                    autoFocus
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid container alignItems="center" justify="center">
                  <Box mt={5} textAlign="center">
                    <Button
                      onClick={() => loginAccount()}
                      variant="contained"
                      color="primary"
                      style={{ display: "flex" }}
                    >
                      Entrar
                      {/* {loading ? (
                  <CircularProgress color="inherit" size={23} />
                ) : ( */}
                      {/* )} */}
                    </Button>
                    <Box mt={3}>
                      <Link to="/register">Registrarme</Link>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default Login;
