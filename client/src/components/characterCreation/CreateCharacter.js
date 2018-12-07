import React, { Component } from "react";
import styled from "styled-components";

import axios from "axios";
import PromiseHandler from "../api/PromiseHandler";
import { withinView } from "../api/View";

import RaceList from "../lists/RaceList";
import GenderList from "../lists/GenderList";
import ClassList from "../lists/ClassList";

import StatRoll from "../statCalculations/StatRoll";
import AssignStats from "../statCalculations/AssignStats";

import TextField from "@material-ui/core/TextField";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const cors = "https://vschool-cors.herokuapp.com/?url=";

function getSteps() {
  return [
    "Choose your name",
    "Choose your race",
    "Choose your gender",
    "Choose your class",
    "Roll 6 times for ability scores",
    "Assign your rolls to stats",
    "Review your character"
  ];
}

const Form = styled.form`
  width: 90vw;
  margin: 10vh auto;
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

const Selected = styled.div`
  width: 60vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default class CreateCharacter extends Component {
  constructor(props) {
    super(props);

    // to change initial section in character select for testing, change activeStep to appropriate step #, starts at 0
    this.state = {
      activeStep: 0,
      // name: "",
      // cClass: "",
      // race: "",
      // gener: "",
      // str: 0,
      // dex: 0,
      // con: 0,
      // int: 0,
      // wis: 0,
      // cha: 0,
      statRolls: [0, 0, 0, 0, 0, 0]
    };

    // bind this so the child can update the stat text? don't understand but ok.
    // Ted
    // this.handleRoll = this.handleRoll.bind(this);
  }

  handleChange = name => event => {
    // this.setState({
    //   [name]: event.target.value
    // });
    // this.props.setValue(name, event.target.value);
    this.props.setValue(name, event.target.value);
  };

  handleNext = () => {
    if (this.state.activeStep === 6) {
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
    const url = "http://dnd5eapi.co/api/races";

    const apiQuery = `${cors}${url}`;

    return axios.get(apiQuery).then(response => response.data.results);
  };

  getClassData() {
    const url = "http://dnd5eapi.co/api/classes";

    const apiQuery = `${cors}${url}`;

    return axios.get(apiQuery).then(response => response.data.results);
  }

  handleSelected = (category, value) => {
    // this.setState({
    //   [category]: value
    // });
    this.props.setValue(category, value);
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
        <Selected>
          <p>Name: {this.props.charVal.name}</p>
          <p>Race: {this.props.charVal.race}</p>
          <p>Gender: {this.props.charVal.gender}</p>
          <p>Class: {this.props.charVal.cClass}</p>
          <p>Strength: {this.props.charVal.str}</p>
          <p>Dexterity: {this.props.charVal.dex}</p>
          <p>Constitution: {this.props.charVal.con}</p>
          <p>Intelligence: {this.props.charVal.int}</p>
          <p>Wisdom: {this.props.charVal.wis}</p>
          <p>Charisma: {this.props.charVal.cha}</p>
        </Selected>
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
                value={this.props.charVal.name}
                onChange={this.handleChange("name")}
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
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
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
              <div>
                <Button disabled={activeStep === 0} onClick={this.handleBack}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
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
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
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
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
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
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
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
                str={this.props.charVal.str}
                dex={this.props.charVal.dex}
                con={this.props.charVal.con}
                int={this.props.charVal.int}
                wis={this.props.charVal.wis}
                cha={this.props.charVal.cha}
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
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>{steps[6]}</StepLabel>
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
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
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
