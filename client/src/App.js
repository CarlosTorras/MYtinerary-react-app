import React from "react";
import Landing from "./components/LandingPage";
import MyFooter from "./components/MyFooter";
import UserMenu from "./components/UserMenuComponent";
import DrawerMenu from "./components/DrawerMenu";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cities from "./components/CitiesPage";
import SignUp from "./components/SignUpPage";
import LogIn from "./components/LogInPage";
import MYtinerary from "./components/MYtineraryPage";
import Favourites from "./components/FavouritesPage";
import { loadUser } from "./store/actions/authActions";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.loadUser();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="NavBar">
            <UserMenu user={this.props.user} />
            <DrawerMenu />
          </div>
          <Switch>
            <Route exact path="/">
              <Landing className="flex-fill" />
            </Route>
            <Route path="/cities" component={Cities} />
            <Route path="/itineraries/:city_id" component={MYtinerary} />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/itineraries/favourites" component={Favourites} />
          </Switch>
          <MyFooter className="footer" />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(
  mapStateToProps,
  { loadUser }
)(App);
