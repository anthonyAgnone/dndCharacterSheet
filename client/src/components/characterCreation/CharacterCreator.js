import React from 'react'
import styled from 'styled-components'

import Build from './Build'
import CustomStepper from './CustomStepper'
import Display from './Display'

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
`

export default function CharacterCreator() {
  return (
    <Wrapper>
      {/* THIS SHOULD BE A SWITCH THAT SWITCHES BETWEEN STEPPERS */}
      <CustomStepper />
      <Display />
    </Wrapper>
  )
}
