import React, { Component } from "react";
import StatDisplay from "./StatDisplay";
export default class StatRoll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      statValue: 0
    };
  }

  shouldComponentUpdate(nextProps) {
    //return this.props.color !== nextProps.color;
    return false;
  }
  generateStat() {
    let max = 18;
    let min = 3;
    /* this.setState({
      statValue: Math.round(min + Math.random() * (max - min))
    }); */
    this.state.statValue = Math.round(min + Math.random() * (max - min));
  }

  render() {
    let handleRoll = this.props.handleRoll;
    return (
      // I commented this out to remove the sub class and just do it here.
      // Propogating this.props.handleRoll between parent and child was confusing enough
      // feel free to correct this and show me how to do parent <->child<->grandchild
      // - Ted
      /* <StatDisplay
        statName={this.props.statName}
        statValue={this.state.statValue}
      />*/
      <div>
        {/* display the stats */}
        <h1 id="strLabel">{this.props.statName}</h1>
        {/* have all the stuffs in here make abstracted */}
        <p>{this.state.statValue}</p>
        <button
          type="button"
          onClick={() => {
            this.generateStat();
            this.forceUpdate();
            handleRoll(this.props.statName, this.state.statValue);
          }}
        >
          r o l l
        </button>
      </div>
    );
  }
}
