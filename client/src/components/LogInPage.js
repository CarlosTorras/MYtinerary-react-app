import React from "react";
import { connect } from "react-redux";
import { logOut } from "../store/actions/authActions";
// import { logIn } from "../store/actions/authActions";
import TextField from "@material-ui/core/TextField";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      msg: null
    };
  }

  render() {
    return (
      <div>
        <h1>Log In Page</h1>

        <form>
          <div>
            <TextField
              name="email"
              className="input"
              label="Email adress"
              margin="normal"
              variant="outlined"
              value={this.props.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <TextField
              name="password"
              className="input"
              label="Password"
              margin="normal"
              variant="outlined"
              value={this.props.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <input type="submit" value="LogIn" />
            <input type="button" onClick={this.props.logOut} value="LogOut" />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  {
    logOut
    //  logIn
  }
)(LogIn);
