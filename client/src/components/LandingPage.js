import React from "react";
import logo from "../assets/MYtineraryLogo.png";
import browsingIcon from "../assets/circled-right-2.png";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  render() {
    return (
      <div>
        <img className="logo" src={logo} alt="Logo" />
        <p>
          Find your perfect trip, designed by insiders who know and love their
          city.
        </p>
        <h2>Start browsing</h2>
        <Link to="/cities">
          <img className="link-img" src={browsingIcon} alt="browsing Icon" />
        </Link>
      </div>
    );
  }
}

export default Landing;
