import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withUserContext } from '../../contexts/UserContext';

class LoggedIn extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }
  render() {
    return (
      <div>
        Hello {this.props.user.firstName}{' '}
        <Button
          type="button"
          onClick={this.handleLogout}
          variant="contained"
          color="primary"
        >
          LogOut
        </Button>
      </div>
    );
  }
}

export default withUserContext(LoggedIn);
