import React from 'react'
import styled from 'styled-components'
import { withCharacter } from '../../contexts/CharacterContext'

const Wrapper = styled.aside`
  width: 40%;
  height: 100%;
  background: #ccc;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  .stats {
    grid-row: 1;
    grid-column: 1 / span 2;
    background: peru;
  }
  .spells {
    grid-row: 2;
    grid-column: 1;
    background: whitesmoke;
  }
  .image {
    grid-row: 2 / span 2;
    grid-column: 2;
    background: powderblue;
  }
  .flavor {
    grid-row: 3;
    grid-column: 1;
    background: blue;
  }
`

const Display = ({ name }) => {
  return (
    <Wrapper>
      <div className="stats">{name}</div>
      <div className="spells">I am spells</div>
      <div className="image">I am image</div>
      <div className="flavor">I am flavor</div>
    </Wrapper>
  )
}

export default withCharacter(Display)
