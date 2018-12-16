import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  h1 {
    margin-right: 2em;
  }
  button {
    margin-right: 2em;
    border: 0;
    padding: 10px 20px;
    border-radius: 4px;
    background-color: #3f51b5;
    box-shadow: 0 5px 10px -3px rgba(0, 0, 0, 0.3);
    color: #fff;
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      background-color: #1321b5;
    }
    &:focus {
      outline: 0;
    }
  }
`

export default class SubRaceChoice extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let subRaceArr = []
    if (this.props.race === 'Dwarf') {
      subRaceArr = ['Hill Dwarf', 'Mountain Dwarf']
    } else if (this.props.race === 'Elf') {
      subRaceArr = ['High Elf', 'Wood Elf', 'Drow']
    } else if (this.props.race === 'Halfling') {
      subRaceArr = ['Lightfoot', 'Stout']
    } else if (this.props.race === 'Human') {
      subRaceArr = []
    } else if (this.props.race === 'Dragonborn') {
      subRaceArr = []
    } else if (this.props.race === 'Gnome') {
      subRaceArr = ['Forest Gnome', 'Rock Gnome']
    } else if (this.props.race === 'Half-Elf') {
      subRaceArr = []
    } else if (this.props.race === 'Half-Orc') {
      subRaceArr = []
    } else if (this.props.race === 'Tiefling') {
      subRaceArr = []
    }

    const raceElements = subRaceArr.map((subrace, i) => (
      <button onClick={() => this.props.handleSelected('subRace', subRaceArr[i])} type="button">
        {subRaceArr[i]}
      </button>
    ))
    return <Wrapper>{raceElements}</Wrapper>
  }
}
