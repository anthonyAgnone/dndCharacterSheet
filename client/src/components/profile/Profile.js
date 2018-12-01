import React, { Component } from 'react'
import styled from 'styled-components'
import { withUserContext } from '../../contexts/UserContext'
import { withCharacter } from '../../contexts/CharacterContext'
import { Button } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
// import Stats from './Stats'

const Wrapper = styled.div`
  margin-top: 20vh;
`

class Profile extends Component {
  render() {
    // const iguana = this.props
    // const stats = [iguana.str, iguana.dex, iguana.const]
    // const keys = Object.keys(iguana)

    // const elements = stats.map((stat, i) => (
    //   <button onClick={() => iguana.changeStat(keys[i + 8], 1)}>Increase {keys[i + 8]}</button>
    // ))
    // const somethingElse = stats.map((value, i) => <h3> {value}</h3>)

    return (
      <Wrapper>
        <h1>{this.props.user.userName}</h1>

        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={() => this.props.history.push('/create-character')}>
          Create New Character
        </Button>
      </Wrapper>
    )
  }
}

export default withRouter(withUserContext(withCharacter(Profile)))
