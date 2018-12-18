import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Reboot from './components/utility/Reboot'
import AnimationContext from './contexts/AnimationContext'
import UserContext from './contexts/UserContext'
import CharacterContext from './contexts/CharacterContext'
import FormContext from './contexts/FormContext'
import CreationContext from './contexts/CreationContext'

ReactDOM.render(
  <BrowserRouter>
    <UserContext>
      <FormContext>
        <CharacterContext>
          <AnimationContext>
            <CreationContext>
              <Reboot>
                <App />
              </Reboot>
            </CreationContext>
          </AnimationContext>
        </CharacterContext>
      </FormContext>
    </UserContext>
  </BrowserRouter>,
  document.getElementById('root')
)
