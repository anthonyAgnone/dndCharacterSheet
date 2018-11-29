import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Reboot from './components/utility/Reboot';
import AnimationContext from './contexts/AnimationContext';
import UserContext from './contexts/UserContext';

ReactDOM.render(
  <BrowserRouter>
    <UserContext>
      <AnimationContext>
        <Reboot>
          <App />
        </Reboot>
      </AnimationContext>
    </UserContext>
  </BrowserRouter>,
  document.getElementById('root')
);
