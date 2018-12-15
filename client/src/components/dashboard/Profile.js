import React, { Component } from 'react'
import styled from 'styled-components'
import { withUserContext } from '../../contexts/UserContext'
import { withCharacter } from '../../contexts/CharacterContext'

import Card from './Card'

const Wrapper = styled.div`
  margin-top: 8vh;
  width: 100vw;
  height: 92vh;
  display: grid;
  grid-template-rows: 20px 5vh 1fr 5vh 20px;
  grid-template-columns: 20px 1fr 20px;
  grid-gap: 10px;
  & h1 {
    grid-row: 2;
    grid-column: 2 / span 4;
    align-self: center;
  }
  & .cardSection {
    grid-column: 2;
    grid-row: 3;
    display: flex;
    justify-content: space-between;
    padding: 0 10%;
  }
`

class Profile extends Component {
  render() {
    const cards = ['', '', '', '']

    const cardElements = cards.map((card, i) => <Card index={i} />)
    return (
      <Wrapper>
        <h1>{this.props.user.userName}</h1>
        <div className="cardSection">{cardElements}</div>
      </Wrapper>
    )
  }
}

export default withUserContext(withCharacter(Profile))
