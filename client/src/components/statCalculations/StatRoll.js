import React, { Component, createRef } from "react";
import StatDisplay from "./StatDisplay";
export default class StatRoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rolledStats: [],
      finalValues: [],
      sum: 0,
      lowestIndex: 0
    };
    this.rollButton = createRef();
  }

  generateStat = () => {
    // set die min max
    let max = 6;
    let min = 1;

    //define temporary array
    let tempArray = [];

    for (let i = 0; i < 4; i++) {
      let random = Math.round(min + Math.random() * (max - min));
      tempArray.push(random);
    }

    let lowestIndex = tempArray.indexOf(Math.min(...tempArray));

    let sum =
      tempArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      ) - tempArray[lowestIndex];

    this.setState({
      rolledStats: tempArray,
      lowestIndex: lowestIndex,
      sum: sum
    });

    if (this.state.finalValues.length < 6) {
      const newArray = [...this.state.finalValues];
      newArray.push(sum);
      this.setState({ finalValues: newArray }, () => {
        if (this.state.finalValues.length === 6) {
          this.rollButton.current.disabled = true;
          this.props.handleRoll(this.state.finalValues);
        }
      });
    }
  };

  componentDidMount() {
    // check if stats exist and disable button
    // then allow reroll if they hate the stats
  }

  render() {
    return (
      // Propogating this.props.handleRoll between parent and child was confusing enough
      // feel free to correct this and show me how to do parent <->child<->grandchild
      // - Ted
      <div>
        <StatDisplay
          rolledStats={this.state.rolledStats}
          lowestIndex={this.state.lowestIndex}
          finalValues={this.state.finalValues}
        />
        <button
          ref={this.rollButton}
          type="button"
          onClick={() => {
            this.generateStat(this.props.statName);
          }}
        >
          r o l l
        </button>
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
