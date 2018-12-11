import React, { Component } from 'react';
import AssignDisplay from './AssignDisplay';

export default class AssignStats extends Component {
  constructor(props) {
    super(props);
    // this.props.rolledStats
    this.state = {
      statNames: ['str', 'dex', 'con', 'int', 'wis', 'cha']
    };
  }

  componentDidMount() {
    // check if stats exist and disable button
    // then allow reroll if they hate the stats
  }

  assignStat = (num, statInd) => {
    let statName = this.state.statNames[statInd];
    let total = num;
    if (
      statName === 'str' &&
      (['Half-Orc', 'Human', 'Dragpnborn'].includes(this.props.race) ||
        ['Mountain Dwarf'].includes(this.props.subRace))
    ) {
      if (this.props.race === 'Human') {
        total += 1;
      } else {
        total += 2;
      }
    } else if (
      statName === 'dex' &&
      (['Elf', 'Halfling', 'Human'].includes(this.props.race) ||
        ['Forest Gnome'].includes(this.props.subRace))
    ) {
      if (this.props.race === 'Human' || this.props.subRace == 'Forest Gnome') {
        total += 1;
      } else {
        total += 2;
      }
    } else if (
      statName === 'con' &&
      (['Dwarf', 'Human', 'Half-Orc'].includes(this.props.race) ||
        ['Stout', 'Rock Gnome'].includes(this.props.subRace))
    ) {
      if (this.props.race === 'Dwarf') {
        total += 2;
      } else {
        total += 1;
      }
    } else if (
      statName === 'int' &&
      (['Tiefling', 'Human', 'Gnome'].includes(this.props.race) ||
        ['High Elf'].includes(this.props.subRace))
    ) {
      if (this.props.race === 'Gnome') {
        total += 2;
      } else {
        total += 1;
      }
    } else if (
      (statName === 'wis' && ['Human'].includes(this.props.race)) ||
      ['Hill Dwarf', 'Wood Elf'].includes(this.props.subRace)
    ) {
      total += 1;
    } else if (
      statName === 'cha' &&
      (['Dragonborn', 'Human', 'Tiefling', 'Half-Elf'].includes(
        this.props.race
      ) ||
        ['Drow', 'Lightfoot'].includes(this.props.subRace))
    ) {
      if (this.props.race === 'Tiefling' || this.props.race === 'Half-Elf') {
        total += 2;
      } else {
        total += 1;
      }
    }
    this.props.handleSelected(statName, total);
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
          Str: {this.props.str} Dex: {this.props.dex} Con: {this.props.con} Int:{' '}
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
