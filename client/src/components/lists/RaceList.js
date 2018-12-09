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

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${bg});
  background-size: cover;
  background-position: 0vh -3vh;
  margin-bottom: 2em;
  position: relative;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  align-items: end;
  & img {
    position: relative;
    bottom: 8px;
    align-self: end;
    width: 100%;
    transition: all 0.3s easeInOut;
  }
  & img:hover {
    background-size: cover;
    background-image: radial-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.001));
  }
`

const races = [dwarf, elf, halfling, human, dragonborn, gnome, halfelf, halforc, tiefling]

const style = {
  1: {
    gridColumn: 1,
    width: '120%'
  },
  2: {
    gridColumn: 2,
    position: 'relative',
    left: '10px'
  },
  3: { gridColumn: 3 },
  4: { gridColumn: 4 },
  5: { gridColumn: 5, width: '120%', position: 'relative', left: '-25px' },
  6: { gridColumn: 6 },
  7: { gridColumn: 7, width: '130%', position: 'relative', left: '-25px' },
  8: { gridColumn: 8, width: '160%', position: 'relative', left: '-50px' },
  9: { gridColumn: 9 }
}

const RaceList = ({ data, handleSelected }) => {
  const raceElements = data.map((race, i) => (
    <img
      onClick={() => handleSelected('race', race.name)}
      style={style[i + 1]}
      src={races[i]}
      className={races[race.name]}
      alt=""
    />
  ))
  return <Wrapper>{raceElements}</Wrapper>
}

export default RaceList
