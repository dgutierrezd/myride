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
import Swal from "sweetalert2";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
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

const Register = () => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [birth_day, setBirthDay] = useState("2017-05-24");

  const createAccount = () => {
    axios
      .post(`${ROUTE_API}/users/register`, {
        name,
        username,
        password,
        email,
        birth_day,
      })
      .then((res) => {
        console.log(res);
        Swal.fire(
          "Usuario creado",
          "El usuario se ha creado exitosamente",
          "success"
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          Registrarse
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
                    name="name"
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    label="Nombre completo"
                    autoFocus
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
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
                    name="email"
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Correo electrónico"
                    autoFocus
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                <Grid item xs={12}>
                  <TextField
                    name="password"
                    variant="outlined"
                    required
                    fullWidth
                    id="password"
                    label="Repita la contraseña"
                    autoFocus
                    type="password"
                    value={password1}
                    onChange={(e) => setPassword1(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="date"
                    fullWidth
                    label="Fecha de nacimiento"
                    type="date"
                    value={birth_day}
                    onChange={(e) => setBirthDay(e.target.value)}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid container alignItems="center" justify="center">
                  <Box mt={5} textAlign="center">
                    <Button
                      onClick={() => createAccount()}
                      variant="contained"
                      color="primary"
                      style={{ display: "flex" }}
                    >
                      Enviar
                      {/* {loading ? (
                  <CircularProgress color="inherit" size={23} />
                ) : ( */}
                      {/* )} */}
                    </Button>
                    <Box mt={3}>
                      <Link to="/">Iniciar Sesión</Link>
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

export default Register;
