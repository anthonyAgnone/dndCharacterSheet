import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  user-select: none;
  font-size: ${props => (props.active ? '2em' : '1em')};
  color: #d9e1be;
  transition: all 0.3s ease-in-out;
  &.active {
    font-size: 2em;
    font-weight: 700;
  }
`
const StepHeader = ({ children, active }) => {
  return (
    <Wrapper active={active} class="step-header">
      <p>{children}</p>
    </Wrapper>
  )
}

export default StepHeader
