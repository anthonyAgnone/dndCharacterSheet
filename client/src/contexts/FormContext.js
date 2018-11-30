import React, { createContext, Component } from 'react';

const { Provider, Consumer } = createContext();

export default class FormContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  render() {
    const props = {
      ...this.state
    };
    return <Provider value={props}>{this.props.children}</Provider>;
  }
}

export const withForm = C => props => (
  <Consumer>{value => <C {...value} {...props} />}</Consumer>
);
