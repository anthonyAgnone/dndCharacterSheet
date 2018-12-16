import React from 'react'
import styled from 'styled-components'

import bg from './assets/races/raceSel.png'

import dwarf from './assets/races/dwarf.png'
import elf from './assets/races/elf.png'
import halfling from './assets/races/halfling.png'
import human from './assets/races/human.png'
import dragonborn from './assets/races/dragonborn.png'
import gnome from './assets/races/gnome.png'
import halfelf from './assets/races/halfelf.png'
import halforc from './assets/races/halforc.png'
import tiefling from './assets/races/tiefling.png'

import MoreInfo from '../characterCreation/MoreInfo'

import Race from './Race'

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  display: grid;
  grid-template-columns: 300px 1fr;
  color: #221e1f;
  z-index: 1000;
  .left {
    width: 300px;
    height: 300px;
    overflow: hidden;
    border-right: 2px solid black;
    position: relative;
  }
  .right {
    width: 100%;
    height: 100%;
    background-color: yellow;
    overflow: auto;
  }
`

// const races = [dwarf, elf, halfling, human, dragonborn, gnome, halfelf, halforc, tiefling]

const RaceList = ({ data, handleSelected }) => {
  const raceElements = data.map((race, i) => (
    // <img
    //   onClick={() => {
    //     handleSelected('race', race.name)
    //     handleSelected('subRace', '')
    //   }}
    //   style={style[i + 1]}
    //   src={races[i]}
    //   className={races[race.name]}
    //   alt=""
    // />
    <Race data={race} key={i} index={i} handleSelected={handleSelected} />
  ))
  return (
    <Wrapper>
      <div className="left">{raceElements}</div>
      <div className="right">
        <MoreInfo handleSelected={handleSelected} />
      </div>
    </Wrapper>
  )
}

export default RaceList
