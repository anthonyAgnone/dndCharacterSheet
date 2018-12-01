import React from 'react'
import LandingPage from './components/LandingPage'
import { withUserContext } from './contexts/UserContext'
import Profile from './components/profile/Profile'
import { Route, Switch } from 'react-router-dom'
import Menu from './components/menu/Menu'

const App = ({ user, token }) => {
  return (
    <div>
      <Menu />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/dashboard" component={Profile} />
      </Switch>
    </div>
  )
}

export default withUserContext(App)
