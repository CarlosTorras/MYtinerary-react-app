import React from "react";
import Landing from "./components/LandingPage";
import MyFooter from "./components/MyFooter";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cities from "./components/CitiesPage";
import SignUp from "./components/SignUpPage";
import LogIn from "./components/LogInPage";
import MYtinerary from "./components/MYtineraryPage";
import { loadUser } from "./store/actions/authActions";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    console.log(this.props);
    // this.props.store.dispatch(loadUser());
    this.props.loadUser();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Landing className="flex-fill" />
            </Route>
            <Route path="/cities" component={Cities} />
            <Route path="/itineraries/:city_id" component={MYtinerary} />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
          <MyFooter className="footer" />
        </Router>
      </div>
    );
  }
}

export default connect(
  null,
  { loadUser }
)(App);
