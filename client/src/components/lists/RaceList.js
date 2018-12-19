import React from 'react'
import styled from 'styled-components'
import RaceInfo from '../characterCreation/RaceInfo'
import Race from './Race'
import testbg from './assets/misc/testBG.png'

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  display: grid;
  grid-template-columns: 300px 1fr;
  color: #221e1f;
  z-index: 1000;
  background-color: #d9e1be;
  background-image: url(${testbg});
  background-attachment: local;
  background-position: 20% 40%;
  .left {
    width: 300px;
    height: 300px;
    overflow: hidden;
    border-right: 5px solid #221e1f;
    position: relative;
  }
  .right {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
`

// const races = [dwarf, elf, halfling, human, dragonborn, gnome, half-elf, half-orc, tiefling]

const RaceList = ({ data, handleSelected }) => {
  const raceElements = data.map((race, i) => <Race data={race} key={i} index={i} handleSelected={handleSelected} />)
  return (
    <Wrapper>
      <div className="left">{raceElements}</div>
      <div className="right">
        <RaceInfo handleSelected={handleSelected} />
      </div>
    </Wrapper>
  )
}

export default RaceList
