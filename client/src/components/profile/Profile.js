import React, { Component } from 'react'
import styled from 'styled-components'
import { withUserContext } from '../../contexts/UserContext'
import { withCharacter } from '../../contexts/CharacterContext'

const Wrapper = styled.div`
  margin-top: 20vh;
`

class Profile extends Component {
  render() {
    const iguana = this.props
    const stats = [iguana.str, iguana.dex, iguana.const]
    const keys = Object.keys(iguana)

    const elements = stats.map((stat, i) => (
      <button onClick={() => iguana.changeStat(keys[i + 8], 1)}>Increase {keys[i + 8]}</button>
    ))
    // const somethingElse = stats.map((value, i) => <h3> {value}</h3>)

    return (
      <Wrapper>
        <h1>{iguana.user.userName}</h1>
        <h3>{iguana.str}</h3>
        <h3>{iguana.dex}</h3>
        <h3>{iguana.const}</h3>
        {elements}
      </Wrapper>
    )
  }
}

export default withUserContext(withCharacter(Profile))
