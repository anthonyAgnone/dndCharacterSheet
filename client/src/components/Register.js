import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withUserContext } from '../contexts/UserContext';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      password: '',
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    console.log('from register component');
    e.preventDefault();
    this.props.register(this.state);
  }

  render() {
    return (
      <div className="form" onSubmit={this.handleSubmit}>
        <h1>Register</h1>
        <form>
          <TextField
            id="firstName"
            label="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
            name="firstName"
            margin="normal"
          />
          <TextField
            id="lastName"
            label="Last Name"
            value={this.state.lastName}
            onChange={this.handleChange}
            name="lastName"
            margin="normal"
          />
          <TextField
            id="userName"
            name="userName"
            label="User Name"
            value={this.state.userName}
            onChange={this.handleChange}
            margin="normal"
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            margin="normal"
          />
          <TextField
            id="password"
            label="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            margin="normal"
          />
          <Button type="button" variant="contained" color="primary">
            Send
          </Button>
        </form>
      </div>
    );
  }
}

// export default withGameContext()()(Register);
export default withUserContext(Register);
