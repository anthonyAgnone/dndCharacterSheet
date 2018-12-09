import React from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import styled from 'styled-components'
import bg from './assets/classes/class_bg.png'
import barbarian from './assets/classes/barbarian.png'
import bard from './assets/classes/bard.png'
import cleric from './assets/classes/cleric.png'
import druid from './assets/classes/druid.png'
import fighter from './assets/classes/fighter.png'
import monk from './assets/classes/monk.png'
import paladin from './assets/classes/paladin.png'

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${bg});
  background-size: cover;
  background-position: 0vh -3vh;
  margin-bottom: 2em;
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: end;
  & img {
    position: relative;
    bottom: 8px;
    align-self: end;
    width: 100%;
    transition: all 0.3s easeInOut;
    cursor: pointer;
  }
  & img:hover {
    background-size: cover;
    background-image: radial-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.001));
  }
`

const classes = [barbarian, bard, cleric, druid, fighter, monk, paladin, paladin, paladin, paladin, paladin, paladin]

const ClassList = ({ data, handleSelected }) => {
  const classElements = data.map((cClass, i) => (
    <Tooltip title={cClass.name} interactive>
      <img
        onClick={() => handleSelected('cClass', cClass.name)}
        src={classes[i]}
        className={cClass[cClass.name]}
        alt=""
      />
    </Tooltip>
  ))
  return <Wrapper>{classElements}</Wrapper>
}

export default ClassList
