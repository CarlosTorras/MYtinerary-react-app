import React from "react";
import Landing from "./components/LandingPage";
import MyFooter from "./components/MyFooter";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cities from "./components/CitiesPage";
import SignUp from "./components/SignUpPage";
import LogIn from "./components/LogInPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing className="flex-fill" />
          </Route>
          <Route path="/cities">
            <Cities />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
        <MyFooter className="footer" />
      </Router>
    </div>
  );
}

export default App;
