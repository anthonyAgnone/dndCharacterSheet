import React, { Component } from 'react'
import styled from 'styled-components'
import { withCharacter } from '../../contexts/CharacterContext'

import barbarian from '../lists/assets/classes/barbarian.png'
import bard from '../lists/assets/classes/bard.png'
import cleric from '../lists/assets/classes/cleric.png'
import druid from '../lists/assets/classes/druid.png'
import fighter from '../lists/assets/classes/fighter.png'
import monk from '../lists/assets/classes/monk.png'
import paladin from '../lists/assets/classes/paladin.png'

const Wrapper = styled.aside`
  width: 40%;
  height: 100%;
  padding: 1em 0;
  background: #b69869;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  color: #221e1f;
  .stats {
    grid-row: 1;
    grid-column: 1 / span 2;
    .row {
      display: flex;
      justify-content: space-between;
      padding: 0 1em;
    }
  }
  .spells {
    grid-row: 2;
    grid-column: 1;
  }
  .image {
    grid-row: 2 / span 2;
    grid-column: 2;
  }
  .flavor {
    grid-row: 3;
    grid-column: 1;
  }
`

const classImgs = [
  barbarian,
  bard,
  cleric,
  druid,
  fighter,
  monk,
  paladin,
  paladin,
  paladin,
  paladin,
  paladin,
  paladin,
  druid
]

const classes = [
  'barbarian',
  'bard',
  'cleric',
  'druid',
  'fighter',
  'monk',
  'paladin',
  'ranger',
  'rogue',
  'sorceror',
  'warlock',
  'wizard',
  ''
]

class Display extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // this doesn't update the image dynamically as props updates. why?
      characterImg: classImgs[classes.indexOf(this.props.cClass)]
    }
  }

  render() {
    return (
      <Wrapper>
        <div className="stats">
          <div className="row">
            <p>Name: {this.props.name}</p>
            <p>Race: {this.props.race}</p>
            <p>SubRace: {this.props.subRace}</p>
            <p>Gender: {this.props.gender}</p>
            <p>Class: {this.props.cClass}</p>
          </div>
          <div className="row">
            <p>STR: {this.props.str}</p>
            <p>INT: {this.props.int}</p>
            <p>DEX: {this.props.dex}</p>
            <p>WIS: {this.props.wis}</p>
            <p>CON: {this.props.con}</p>
            <p>CHA: {this.props.cha}</p>
          </div>
          <div className="row">
            <p>Alignment:{this.props.alignment}</p>
          </div>
        </div>
        <div className="spells">I am spells</div>
        <div className="image">
          <img src={this.state.characterImg} alt="" />
        </div>
        <div className="flavor">I am flavor</div>
      </Wrapper>
    )
  }
}
export default withCharacter(Display)
