import React, { Component } from 'react'
import { withCharacter } from '../../contexts/CharacterContext'

import styled from 'styled-components'

import axios from 'axios'

const Wrapper = styled.div`
  width: 89%;
  position: absolute;
  top: 90%;
  left: 51%;
  background-color: #d9e1be;
  color: #221e1f;
  transform: translateX(-50%);
  transition: all 0.3s ease;
  overflow-overflow: ${props => (props.visible ? 'scroll' : 'hidden')};
  height: ${props => (props.visible ? '200px' : 0)};
  z-index: 9999;
`
const raceArray = ['Dwarf', 'Elf', 'Halfling', 'Human', 'Dragonborn', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tiefling']

const cors = 'https://vschool-cors.herokuapp.com/?url='

class MoreInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
      dataObject: {}
    }
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.race !== prevProps.race) {
      this.setState({
        race: this.props.race,
        visible: true
      })
      const searchQuery = raceArray.indexOf(this.props.race) + 1
      axios.get(`${cors}http://dnd5eapi.co/api/races/${searchQuery}'`).then(response =>
        this.setState({
          dataObject: response.data
        })
      )
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
    } = this.state.dataObject

    const statBonuses = () => {
      if (this.state.visible) {
        // this.state.dataObject.ability_bonuses.forEach(el => {
        //   if (el > 0) return <p>{el}</p>
        // })
        console.log(ability_bonuses)
      }
    }
    return (
      <Wrapper visible={this.state.visible}>
        <h1>{name}</h1>
        <p>{alignment}</p>
        <p>{speed}</p>
        <p>{statBonuses()}</p>
      </Wrapper>
    )
  }
}

export default withCharacter(MoreInfo)
