import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  user-select: none;
  font-size: 16px;
  color: #d9e1be;
`
const StepHeader = ({ children }) => {
  return (
    <Wrapper class="step-header">
      <div class="header">{children}</div>
    </Wrapper>
  )
}

export default StepHeader
