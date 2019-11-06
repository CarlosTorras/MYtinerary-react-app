import React from "react";
// material UI imports
import TextField from "@material-ui/core/TextField";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      userName: "",
      password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  //  Inputs functions
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <h1>Sign In page</h1>
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
              name="userName"
              className="input"
              label="User name"
              margin="normal"
              variant="outlined"
              value={this.props.userName}
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
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignUp;
