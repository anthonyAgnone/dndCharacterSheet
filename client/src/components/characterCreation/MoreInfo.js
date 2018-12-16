import React, { Component } from 'react'
import { withCharacter } from '../../contexts/CharacterContext'

import styled from 'styled-components'

import axios from 'axios'
import SubRaces from '../api/SubRace.json'

import SubRaceChoice from '../lists/SubRaceChoice'

const Wrapper = styled.div`
  width: 100%;
  background-color: #d9e1be;
  color: #221e1f;
  transition: all 0.3s ease;
  height: ${props => (props.visible ? '100%' : 0)};
  overflow-x: hidden;
  overflow-y: ${props => (props.visible ? 'scroll' : 'hidden')};
  z-index: 9999;
  position: relative;
  padding: ${props => (props.visible ? '2em' : 0)};
`
const raceArray = ['Dwarf', 'Elf', 'Halfling', 'Human', 'Dragonborn', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tiefling']

const cors = 'https://vschool-cors.herokuapp.com/?url='

class MoreInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
      dataRace: {},
      dataSubRace: {}
    }
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):

    const searchQuery = raceArray.indexOf(this.props.race)

    if (this.props.race !== prevProps.race) {
      this.setState({
        race: this.props.race,
        visible: true
      })
      axios.get(`${cors}http://dnd5eapi.co/api/races/${searchQuery + 1}'`).then(response =>
        this.setState({
          dataRace: response.data
        })
      )
    }
    if (this.props.subRace !== prevProps.subRace) {
      for (let i = 0; i < SubRaces[searchQuery].subRaces.length; i++) {
        if (this.props.subRace === SubRaces[searchQuery].subRaces[i].subName) {
          this.setState({
            dataSubRace: SubRaces[searchQuery].subRaces[i]
          })
        }
      }
      if (this.props.subRace === '') {
        this.setState({
          dataSubRace: {}
        })
      }
    }

    if (this.props.step !== prevProps.step) {
      this.setState({
        visible: false
      })
    }
  }

  // maybe make api calls here if they are available

  render() {
    const {
      name,
      ability_bonuses,
      alignment,
      size_description,
      starting_proficiences,
      languages,
      traits,
      speed
    } = this.state.dataRace

    const statTitles = ['str: +', 'dex: +', 'con: +', 'int: +', 'wis: +', 'cha: +']
    const statBonuses = array => {
      const newArray = []
      if (typeof array !== 'undefined') {
        array.forEach((el, i) => {
          if (el > 0) {
            newArray.push(
              <p style={{ marginRight: '2em' }}>
                {statTitles[i]}
                {el}
              </p>
            )
          }
        })
      }
      return newArray.map((el, i) => el)
    }
    return (
      <Wrapper visible={this.state.visible}>
        <SubRaceChoice race={this.props.race} handleSelected={this.props.handleSelected} />
        <h1>{name}</h1>
        <p>{alignment}</p>
        <p>Speed: {speed}</p>
        <div
          style={{
            width: '100%',
            display: 'flex'
          }}
        >
          {statBonuses(ability_bonuses)}
        </div>
        <h2>{this.state.dataSubRace.subName}</h2>
        <div
          style={{
            width: '100%',
            display: 'flex'
          }}
        >
          {statBonuses(this.state.dataSubRace.ability_bonuses)}
        </div>
        <p>{this.state.dataSubRace.description}</p>
      </Wrapper>
    )
  }
}

export default withCharacter(MoreInfo)
