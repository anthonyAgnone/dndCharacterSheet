import React, { createContext, Component, createRef } from 'react';

const { Provider, Consumer } = createContext();

export default class UserContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      token: ''
    };
  }

  render() {
    const props = {
      ...this.state
    };
    return <Provider value={props}>{this.props.children}</Provider>;
  }
}

export const withUser = C => props => (
  <Consumer>{value => <C {...value} {...props} />}</Consumer>
);
