import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";
import StartRide from "./Components/StartRide";
import Ride from "./Components/Ride";
import FinishRide from "./Components/FinishRide";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/start-ride">
            <StartRide />
          </Route>
          <Route path="/ride">
            <Ride />
          </Route>
          <Route path="/finish-ride">
            <FinishRide />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
