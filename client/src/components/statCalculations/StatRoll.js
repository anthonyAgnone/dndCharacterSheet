import React, { Component } from 'react';
import StatDisplay from './StatDisplay';
export default class StatRoll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      statValue: 0
    };
  }

  render() {
    return (
      <StatDisplay
        statName={this.props.statName}
        statValue={this.state.statValue}
      />
    );
  }
}
