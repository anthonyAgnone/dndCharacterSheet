import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
`;

export default class SubRaceChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let subRaceArr = [];
    if (this.props.race === 'Dwarf') {
      subRaceArr = ['Hill Dwarf', 'Mountain Dwarf'];
    } else if (this.props.race === 'Elf') {
      subRaceArr = ['High Elf', 'Wood Elf', 'Drow'];
    } else if (this.props.race === 'Halfling') {
      subRaceArr = ['Lightfoot', 'Stout'];
    } else if (this.props.race === 'Human') {
      subRaceArr = [];
    } else if (this.props.race === 'Dragonborn') {
      subRaceArr = [];
    } else if (this.props.race === 'Gnome') {
      subRaceArr = ['Forest Gnome', 'Rock Gnome'];
    } else if (this.props.race === 'Half-Elf') {
      subRaceArr = [];
    } else if (this.props.race === 'Half-Orc') {
      subRaceArr = [];
    } else if (this.props.race === 'Tiefling') {
      subRaceArr = [];
    }

    const raceElements = subRaceArr.map((subrace, i) => (
      <button
        onClick={() => this.props.handleSelected('subRace', subRaceArr[i])}
        type="button"
      >
        {subRaceArr[i]}
      </button>
    ));
    return <Wrapper>{raceElements}</Wrapper>;
  }
}
