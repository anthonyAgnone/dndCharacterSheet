import React, { Component } from 'react';
import styled from 'styled-components';
import StepHeader from '../StepHeader';
import StepContent from '../StepContent';

import CustomStepper from './CustomStepper';

import axios from 'axios';
import PromiseHandler from '../../api/PromiseHandler';
import { withinView } from '../../api/View';

import RaceList from '../../lists/RaceList';
import GenderList from '../../lists/GenderList';
import ClassList from '../../lists/ClassList';
import AlignmentList from '../../lists/AlignmentList';
import StatRoll from '../../statCalculations/StatRoll';
import AssignStats from '../../statCalculations/AssignStats';

import { withCharacter } from '../../../contexts/CharacterContext';

import bg from '../darkTestBg.png';

import { lighten } from 'polished';

const cors = 'https://vschool-cors.herokuapp.com/?url=';

class BuildStepper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      statRolls: [0, 0, 0, 0, 0, 0]
    };
  }

  /*
   *
   * AXIOS FUNCTIONS
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
    //Array of Hader Info
    const headerArr = [
      'Choose Your Race',
      'Choose Your Class',
      'Roll Stats',
      'Assign Stats'
    ];

    // Array of StepContent to put in Stepper
    const contentArr = [
      // RACE LIST
      <StepContent>
        <PromiseHandler
          promise={this.getRaceData}
          render={withinView(RaceList)}
          handleSelected={this.handleSelected}
        />
      </StepContent>,
      // CLASS LIST
      <StepContent>
        <PromiseHandler
          promise={this.getClassData}
          render={withinView(ClassList)}
          handleSelected={this.handleSelected}
        />
      </StepContent>,
      // STAT ROLL
      <StepContent>
        <StatRoll handleRoll={this.handleRoll} />
      </StepContent>,
      // ASSIGN STATS
      <StepContent>
        <AssignStats
          handleRoll={this.handleRoll}
          statRolls={this.state.statRolls}
          handleSelected={this.handleSelected}
          race={this.props.race}
          subRace={this.props.subRace}
        />
      </StepContent>
    ];

    return <CustomStepper headerArr={headerArr} contentArr={contentArr} />;
  }
}

export default withCharacter(BuildStepper);
