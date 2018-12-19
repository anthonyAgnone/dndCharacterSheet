import React, { Component } from 'react'
import { withCharacter } from '../../contexts/CharacterContext'

import styled from 'styled-components'

import axios from 'axios'

import bg from '../lists/assets/misc/testBG.png'

import { darken } from 'polished'

const Wrapper = styled.div`
  width: 100%;
  background-color: #d9e1be;
  background-image: url('${bg}');
  background-attachment: local;
  background-position: 20% 40%;
  color: #221e1f;
  transition: all 0.3s ease;
  height: ${props => (props.visible ? '100%' : 0)};
  overflow-x: hidden;
  overflow-y: ${props => (props.visible ? 'scroll' : 'hidden')};
  z-index: 9999;
  position: relative;
  padding: ${props => (props.visible ? '2em' : 0)};
  font-size: 1.4em;
  font-weight: 400;
  color: ${darken(0.5967, '#ECD7AC')};
  text-shadow: 1px 1px 0px rgba(255,255,255, .07);
  h1,h2 {
    font-weight: 700;
    color: #570002;
    opacity: .8;
  }
`
const classArray = [
  'Barbarian',
  'Bard',
  'Cleric',
  'Druid',
  'Fighter',
  'Monk',
  'Paladin',
  'Ranger',
  'Rogue',
  'Sorcerer',
  'Warlock',
  'Wizard'
]

const cors = 'https://vschool-cors.herokuapp.com/?url='

class ClassInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
      class: '',
      dataClass: {}
    }
  }

  componentDidUpdate(prevProps) {
    const searchQuery = classArray.indexOf(this.props.cClass)

    if (this.props.cClass !== prevProps.cClass) {
      this.setState({
        class: this.props.cClass,
        visible: true
      })
      axios.get(`${cors}http://dnd5eapi.co/api/classes/${searchQuery + 1}'`).then(response =>
        this.setState({
          dataClass: response.data
        })
      )
    }

    if (this.props.step !== prevProps.step) {
      this.setState({
        visible: false
      })
    }
  }

  render() {
    const { name, hit_die } = this.state.dataClass
    return (
      <Wrapper visible={this.state.visible}>
        <h1>{name}</h1>
        <p>Hit Die: {hit_die}</p>
      </Wrapper>
    )
  }
}

export default withCharacter(ClassInfo)
