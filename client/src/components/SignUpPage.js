import React from "react";
// material UI imports

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
            <label htmlFor="email">Email adress: </label>
            <input
              name="email"
              type="text"
              id="email"
              value={this.props.email}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="userName">User name: </label>
            <input
              name="userName"
              id="userName"
              type="text"
              value={this.props.userName}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="password">Password: </label>
            <input
              name="password"
              id="password"
              type="text"
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
