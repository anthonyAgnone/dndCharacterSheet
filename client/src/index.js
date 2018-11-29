import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Reboot from './components/utility/Reboot';
import AnimationContext from './contexts/AnimationContext';
import UserContext from './contexts/UserContext';
import CharacterContext from './contexts/CharacterContext';
import FormContext from './contexts/FormContext';
ReactDOM.render(
  <BrowserRouter>
    <UserContext>
      <FormContext>
        <CharacterContext>
          <AnimationContext>
            <Reboot>
              <App />
            </Reboot>
          </AnimationContext>
        </CharacterContext>
      </FormContext>
    </UserContext>
  </BrowserRouter>,
  document.getElementById('root')
);
