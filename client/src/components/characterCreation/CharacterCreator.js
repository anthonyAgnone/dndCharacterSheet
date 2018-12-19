import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import OriginStats from './steppers/OriginStats';
import Display from './Display';

import bg from './assets/darkBg.png';
import TabPanel from './TabPanel';
const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  background-color: #221e1f;
  background-image: url('${bg}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
// Change names of steppers. Look to abstract stepper

export default function CharacterCreator() {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/create-character/" component={TabPanel} />
      </Switch>
      <Display />
    </Wrapper>
  );
}
