import React, { createContext, Component, createRef } from 'react';

const { Provider, Consumer } = createContext();

export default class CharacterContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      race: '',
      class: ''
    };
  }

  render() {
    const props = {
      ...this.state
    };
    return <Provider value={props}>{this.props.children}</Provider>;
  }
}

export const withCharacter = C => props => (
  <Consumer>{value => <C {...value} {...props} />}</Consumer>
);
