import React, { createContext, Component } from 'react';

const { Provider, Consumer } = createContext();

export default class AnimationContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: ''
    };
  }

  render() {
    const props = {
      ...this.state
    };
    return <Provider value={props}>{this.props.children}</Provider>;
  }
}

export const withAnimation = C => props => (
  <Consumer>{value => <C {...value} {...props} />}</Consumer>
);
