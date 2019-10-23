import React from "react";
import homeIcon from "../assets/homeIcon.png";
import { Link } from "react-router-dom";

class MyFooter extends React.Component {
  render() {
    return (
      <Link to="/">
        <img className="link-img" src={homeIcon} alt="Home Icon" />
      </Link>
    );
  }
}

export default MyFooter;
