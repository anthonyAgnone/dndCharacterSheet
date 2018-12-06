import React, { Component, createRef } from "react";
import AssignDisplay from "./AssignDisplay";

export default class AssignStats extends Component {
  constructor(props) {
    super(props);
    // this.props.rolledStats
    this.state = {
      statNames: ["str", "dex", "con", "int", "wis", "cha"]
    };
  }

  componentDidMount() {
    // check if stats exist and disable button
    // then allow reroll if they hate the stats
  }

  assignStat = (num, statInd) => {
    this.props.handleSelected(this.state.statNames[statInd], num);
  };

  clearAssign = () => {
    for (let j = 0; j < this.state.statNames.length; j++) {
      this.props.handleSelected(this.state.statNames[j], 0);
    }
  };
  render() {
    return (
      <div>
        <div>
          Str: {this.props.str} Dex: {this.props.dex} Con: {this.props.con} Int:{" "}
          {this.props.int} Wis: {this.props.wis} Cha: {this.props.cha}
        </div>
        <AssignDisplay
          statRolls={this.props.statRolls}
          assignStat={this.assignStat}
          statNames={this.state.statNames}
          clearAssign={this.clearAssign}
        />
      </div>
    );
  }
}

// this.setState(
//   {
//     statValue:
//         },
//   () => this.props.handleRoll(statName, this.state.statValue)
// );
