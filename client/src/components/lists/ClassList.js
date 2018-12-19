import React from 'react'
import styled from 'styled-components'
import ClassInfo from '../characterCreation/ClassInfo'
import Class from './Class'
import testbg from './assets/misc/testBG.png'

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  display: grid;
  grid-template-columns: 400px 1fr;
  color: #221e1f;
  z-index: 1000;
  background-color: #d9e1be;
  background-image: url(${testbg});
  background-attachment: local;
  background-position: 20% 40%;
  .left {
    width: 400px;
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

const ClassList = ({ data, handleSelected }) => {
  const classElements = data.map((cClass, i) => (
    <Class data={cClass} key={i} index={i} handleSelected={handleSelected} />
  ))
  return (
    <Wrapper>
      <div className="left">{classElements}</div>
      <div className="right">
        <ClassInfo handleSelected={handleSelected} />
      </div>
    </Wrapper>
  )
}

export default ClassList
