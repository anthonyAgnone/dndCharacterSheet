import React, { Component } from 'react';
import styled from 'styled-components';

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

import TextField from '@material-ui/core/TextField';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { withCharacter } from '../../contexts/CharacterContext';

const cors = 'https://vschool-cors.herokuapp.com/?url=';

function getSteps() {
  return [
    'Choose your name',
    'Choose your race',
    'Choose your gender',
    'Choose your class',
    'Roll 6 times for ability scores',
    'Assign your rolls to stats',
    'Choose your alignment',
    'Review your character'
  ];
}

const Form = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & .stepper {
    width: 80%;
    text-align: center;
  }
  & #outlined-name {
    width: 40vw;
  }
`;

const FormatDiv = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  padding-top: 1em;
`;

class Build extends Component {
  constructor(props) {
    super(props);

    // to change initial section in character select for testing, change activeStep to appropriate step #, starts at 0
    this.state = {
      activeStep: 6,
      statRolls: [0, 0, 0, 0, 0, 0]
    };
  }

  handleChange = name => event => {
    //this.props.setValue(name, event.target.value);
    if (event.key === 'Enter') {
      event.preventDefault();
      this.handleNext();
    } else {
      this.props.setValue(name, this.props.name + event.key);
    }
  };

  handleNext = () => {
    if (this.state.activeStep === getSteps().length - 1) {
      this.props.statsDone();
    }
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

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

  handleSelected = (category, value) => {
    // this.setState({
    //   [category]: value
    // });
    this.props.setValue(category, value);
    //console.log(category);
  };

  handleRoll = array => {
    this.setState({
      statRolls: array
    });
  };

  render() {
    const steps = getSteps();
    const { activeStep } = this.state;
    return (
      <Form>
        <Stepper
          className="stepper"
          activeStep={activeStep}
          orientation="vertical"
        >
          <Step className="step">
            <StepLabel>{steps[0]}</StepLabel>
            <StepContent className="stepContent">
              <TextField
                id="outlined-name"
                label="Name"
                value={this.props.name}
                onKeyPress={this.handleChange('name')}
                margin="normal"
                variant="outlined"
              />
              <FormatDiv>
                <Button disabled={activeStep === 0} onClick={this.handleBack}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </FormatDiv>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>{steps[1]}</StepLabel>
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
              <div>
                <Button disabled={activeStep === 0} onClick={this.handleBack}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>{steps[2]}</StepLabel>
            <StepContent>
              <GenderList handleSelected={this.handleSelected} />
              <div>
                <Button disabled={activeStep === 0} onClick={this.handleBack}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>{steps[3]}</StepLabel>
            <StepContent>
              <PromiseHandler
                promise={this.getClassData}
                render={withinView(ClassList)}
                handleSelected={this.handleSelected}
              />
              <div>
                <Button disabled={activeStep === 0} onClick={this.handleBack}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>{steps[4]}</StepLabel>
            <StepContent>
              <StatRoll handleRoll={this.handleRoll} />
              <div>
                <Button disabled={activeStep === 0} onClick={this.handleBack}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>{steps[5]}</StepLabel>
            <StepContent>
              <AssignStats
                handleRoll={this.handleRoll}
                statRolls={this.state.statRolls}
                str={this.props.str}
                dex={this.props.dex}
                con={this.props.con}
                int={this.props.int}
                wis={this.props.wis}
                cha={this.props.cha}
                handleSelected={this.handleSelected}
                race={this.props.race}
                subRace={this.props.subRace}
              />
              <div>
                <Button disabled={activeStep === 0} onClick={this.handleBack}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>{steps[6]}</StepLabel>
            <StepContent>
              <FormatDiv>
                <AlignmentList handleSelected={this.handleSelected} />
              </FormatDiv>
              <div>
                <Button disabled={activeStep === 0} onClick={this.handleBack}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>{steps[7]}</StepLabel>
            <StepContent>
              <div>
                <Button disabled={activeStep === 0} onClick={this.handleBack}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </StepContent>
          </Step>
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={this.handleReset}>Reset</Button>
          </Paper>
        )}
      </Form>
    );
  }
}

export default withCharacter(Build);
