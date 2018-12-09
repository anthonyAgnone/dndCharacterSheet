import React from 'react'
import styled from 'styled-components'

import Build from './Build'
import Display from './Display'

const Wrapper = styled.main`
  width: 100vw;
  height: 90vh;
  margin: 10vh 0 0 0;
  display: flex;
  justify-content: space-around;
`

export default function CharacterCreator() {
  return (
    <Wrapper>
      <Build />
      <Display />
    </Wrapper>
  )
}
