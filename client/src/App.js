import React from 'react';
import LandingPage from './components/LandingPage';
import { withUserContext } from './contexts/UserContext';
import { Route, Switch, Redirect } from 'react-router-dom';
import Menu from './components/menu/Menu';

const App = ({ user, token }) => {
  return (
    <div>
      <Menu />
      {token ? (
        <Switch>
          <Redirect to={`/dashboard`} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      )}
    </div>
  );
};

export default withUserContext(App);
