import React from 'react'
import LandingPage from './components/LandingPage'
import { withUserContext } from './contexts/UserContext'
import Profile from './components/dashboard/Profile'
import { Route, Switch } from 'react-router-dom'
import CharacterCreator from './components/characterCreation/CharacterCreator'
import Menu from './components/menu/Menu'
import styled from 'styled-components'

const Wrapper = styled.div`
  font-family: 'Balthazar', serif;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #221e1f;
`

const App = ({ user, token }) => {
  return (
    <Wrapper>
      <Menu />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/dashboard" component={Profile} />
        <Route path="/create-character" component={CharacterCreator} />
      </Switch>
    </Wrapper>
  )
}

export default withUserContext(App)
