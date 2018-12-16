import React, { Component } from 'react';
import styled from 'styled-components';
import StepHeader from './StepHeader';
import StepContent from './StepContent';

import axios from 'axios';
import PromiseHandler from '../api/PromiseHandler';
import { withinView } from '../api/View';

import RaceList from '../lists/RaceList';
import GenderList from '../lists/GenderList';
import ClassList from '../lists/ClassList';
import AlignmentList from '../lists/AlignmentList';
import SubRaceChoice from '../lists/SubRaceChoice';
import StatRoll from '../statCalculations/StatRoll';
import AssignStats from '../statCalculations/AssignStats';

import { withCharacter } from '../../contexts/CharacterContext';

import MoreInfo from './MoreInfo';

const cors = 'https://vschool-cors.herokuapp.com/?url=';

const Wrapper = styled.div`
  width: 60vw;
  height: 100%;
  box-shadow: 0px 10px 15px -5px rgba(0, 0, 0, 0.3);
  padding: 7em 0;
  position: relative;
  margin: auto;
  background-color: #221e1f;
  &::after {
    content: '';
    position: absolute;
    height: 13px;
    width: 13px;
    background-color: #d9e1be;
    box-shadow: 0px 0px 5px 0px #d9e1be;
    border-radius: 15px;
    left: calc(50px / 2);
    bottom: 24px;
    transform: translateX(-45%);
    z-index: 2;
  }
`;

const Step = styled.div`
  padding: 0 20px 24px 50px;
  position: relative;
  transition: all 0.4s ease-in-out;
  &::before {
    content: '';
    position: absolute;
    height: 13px;
    width: 13px;
    background-color: #570002;
    border-radius: 15px;
    left: calc(50px / 2);
    transform: translateX(-45%) translateY(-20px);
    z-index: 2;
  }
  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 1px;
    background-color: #570002;
    left: calc(50px / 2);
    transform: translateY(-20px);
    top: 0;
    z-index: 1;
  }
  .step-content {
    transition: all 0.3s ease-in-out;
    height: 300px;
    overflow: hidden;
    position: relative;
    width: 95%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin: 1em auto;
    color: #d9e1be;
  }
  &.minimized {
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;
    :hover {
      background-color: rgba(0, 0, 0, 0.06);
    }
    .step-content {
      height: 0;
      padding: 0;
    }
  }
`;

const ButtonContainer = styled.div`
  width: 33%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  button {
    border: 0;
    padding: 10px 20px;
    border-radius: 4px;
    background-color: #7f7174;
    box-shadow: 0 5px 10px -3px rgba(99, 99, 0, 0.3);
    color: #d9e1be;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      background-color: #570002;
    }
    &:focus {
      outline: 0;
    }
  }
  .next-button {
    background-color: #570002;
    color: #d9e1be;
    &:hover {
      background-color: #d9e1be;
      color: #570002;
    }
  }
`;

class CustomStepper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      statRolls: [0, 0, 0, 0, 0, 0]
    };
  }

  /*
   *
   * HANDLE API REQUESTS
   *
   */

  getRaceData = () => {
    const url = 'http://dnd5eapi.co/api/races';

    const apiQuery = `${cors}${url}`;

    return axios.get(apiQuery).then(response => response.data.results);
  };

  getClassData() {
    const url = 'http://dnd5eapi.co/api/classes';

    const apiQuery = `${cors}${url}`;

    return axios.get(apiQuery).then(response => response.data.results);
  }

  /*
   *
   * STEPPER FUNCTIONS
   *
   */

  handleActiveStep = step => {
    if (step === this.state.step) return 'step';
    else return 'step minimized';
  };

  handleNextStep = () => {
    this.setState(
      prevState => ({
        step: (prevState.step -= 100)
      }),
      () => {
        setTimeout(() => {
          this.setState(prevState => ({
            step: (prevState.step += 101)
          }));
        }, 400);
      }
    );
  };

  handleLastStep = () => {
    if (this.state.step !== 0) {
      this.setState(
        prevState => ({
          step: (prevState.step -= 100)
        }),
        () => {
          setTimeout(() => {
            this.setState(prevState => ({
              step: (prevState.step += 99)
            }));
          }, 400);
        }
      );
    }
  };

  /*
   *
   * CHARACTER BUILDER FUNCTIONS
   *
   */

  handleSelected = (category, value) => {
    this.props.setValue(category, value);
  };

  handleRoll = array => {
    this.setState({
      statRolls: array
    });
  };

  render() {
    return (
      <Wrapper>
        {/* RACE STEP */}
        <Step className={this.state.step === 0 ? 'step' : 'step minimized'}>
          <StepHeader>Choose Your Race</StepHeader>
          <StepContent>
            <PromiseHandler
              promise={this.getRaceData}
              render={withinView(RaceList)}
              handleSelected={this.handleSelected}
            />
            <SubRaceChoice
              race={this.props.race}
              handleSelected={this.handleSelected}
            />
          </StepContent>
          <MoreInfo step={this.state.step} />
        </Step>
        {/* CLASS STEP */}
        <Step className={this.state.step === 1 ? 'step' : 'step minimized'}>
          <StepHeader>Choose Your Class</StepHeader>
          <StepContent>
            <PromiseHandler
              promise={this.getClassData}
              render={withinView(ClassList)}
              handleSelected={this.handleSelected}
            />
          </StepContent>
        </Step>
        {/* ROLL FOR STATS */}
        <Step className={this.state.step === 2 ? 'step' : 'step minimized'}>
          <StepHeader>Roll Stats</StepHeader>
          <StepContent>
            <StatRoll handleRoll={this.handleRoll} />
          </StepContent>
        </Step>

        {/* ASSIGN STATS */}
        <Step className={this.state.step === 3 ? 'step' : 'step minimized'}>
          <StepHeader>Assign Stats</StepHeader>
          <StepContent>
            <AssignStats
              handleRoll={this.handleRoll}
              statRolls={this.state.statRolls}
              handleSelected={this.handleSelected}
              race={this.props.race}
              subRace={this.props.subRace}
            />
          </StepContent>
        </Step>

        <ButtonContainer className="buttons">
          <button className="back-btn" onClick={() => this.handleLastStep()}>
            back
          </button>
          <button className="next-button" onClick={() => this.handleNextStep()}>
            Next
          </button>
        </ButtonContainer>
      </Wrapper>
    );
  }
}

export default withCharacter(CustomStepper);
