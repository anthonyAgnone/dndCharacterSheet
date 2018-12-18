import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  transition: all 0.3s ease-in-out;
  height: 300px;
  overflow: hidden;
  position: relative;
  width: 95%;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin: 1em auto;
  color: #d9e1be;
`

const StepContent = ({ children }) => {
  return <Wrapper className="step-content">{children}</Wrapper>
}

export default StepContent
