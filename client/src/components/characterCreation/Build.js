import React, { Component } from 'react'
import styled from 'styled-components'

import axios from 'axios'
import PromiseHandler from '../api/PromiseHandler'
import { withinView } from '../api/View'

import RaceList from '../lists/RaceList'
import GenderList from '../lists/GenderList'
import ClassList from '../lists/ClassList'

import StatRoll from '../statCalculations/StatRoll'
import AssignStats from '../statCalculations/AssignStats'

import TextField from '@material-ui/core/TextField'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import { withCharacter } from '../../contexts/CharacterContext'

const cors = 'https://vschool-cors.herokuapp.com/?url='

function getSteps() {
  return [
    'Choose your name',
    'Choose your race',
    'Choose your gender',
    'Choose your class',
    'Roll 6 times for ability scores',
    'Assign your rolls to stats',
    'Review your character'
  ]
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
`

const FormatDiv = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  padding-top: 1em;
`

class Build extends Component {
  constructor(props) {
    super(props)

    // to change initial section in character select for testing, change activeStep to appropriate step #, starts at 0
    this.state = {
      activeStep: 0,
      statRolls: [0, 0, 0, 0, 0, 0]
    }
  }

  handleChange = name => event => {
    this.props.setValue(name, event.target.value)
  }

  handleNext = () => {
    if (this.state.activeStep === 6) {
      this.props.statsDone();
    }
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }))
  }

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }))
  }

  handleReset = () => {
    this.setState({
      activeStep: 0
    })
  }

  getRaceData = () => {
<<<<<<< HEAD:client/src/components/characterCreation/Build.js
    const url = 'http://dnd5eapi.co/api/races'
=======
    const url = 'http://dnd5eapi.co/api/races';
>>>>>>> 506526267d15f53dd849c2754ec6fc23236b332a:client/src/components/characterCreation/CreateCharacter.js

    const apiQuery = `${cors}${url}`

    return axios.get(apiQuery).then(response => response.data.results)
  }

  getClassData() {
<<<<<<< HEAD:client/src/components/characterCreation/Build.js
    const url = 'http://dnd5eapi.co/api/classes'
=======
    const url = 'http://dnd5eapi.co/api/classes';
>>>>>>> 506526267d15f53dd849c2754ec6fc23236b332a:client/src/components/characterCreation/CreateCharacter.js

    const apiQuery = `${cors}${url}`

    return axios.get(apiQuery).then(response => response.data.results)
  }

  handleSelected = (category, value) => {
<<<<<<< HEAD:client/src/components/characterCreation/Build.js
    this.setState({
      [category]: value
    })
    console.log(category)
  }
=======
    this.props.setValue(category, value);
  };
>>>>>>> 506526267d15f53dd849c2754ec6fc23236b332a:client/src/components/characterCreation/CreateCharacter.js

  handleRoll = array => {
    this.setState({
      statRolls: array
    })
  }

  render() {
    const steps = getSteps()
    const { activeStep } = this.state
    return (
      <Form>
<<<<<<< HEAD:client/src/components/characterCreation/Build.js
        <Stepper className="stepper" activeStep={activeStep} orientation="vertical">
=======
        <Selected>
          <p>Name: {this.props.name}</p>
          <p>Race: {this.props.race}</p>
          <p>Gender: {this.props.gender}</p>
          <p>Class: {this.props.cClass}</p>
          <p>Strength: {this.props.str}</p>
          <p>Dexterity: {this.props.dex}</p>
          <p>Constitution: {this.props.con}</p>
          <p>Intelligence: {this.props.int}</p>
          <p>Wisdom: {this.props.wis}</p>
          <p>Charisma: {this.props.cha}</p>
        </Selected>
        <Stepper
          className="stepper"
          activeStep={activeStep}
          orientation="vertical"
        >
>>>>>>> 506526267d15f53dd849c2754ec6fc23236b332a:client/src/components/characterCreation/CreateCharacter.js
          <Step className="step">
            <StepLabel>{steps[0]}</StepLabel>
            <StepContent className="stepContent">
              <TextField
                id="outlined-name"
                label="Name"
                value={this.props.name}
                onChange={this.handleChange('name')}
                margin="normal"
                variant="outlined"
              />
              <FormatDiv>
                <Button disabled={activeStep === 0} onClick={this.handleBack}>
                  Back
                </Button>
<<<<<<< HEAD:client/src/components/characterCreation/Build.js
                <Button variant="contained" color="primary" onClick={this.handleNext}>
=======
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                >
>>>>>>> 506526267d15f53dd849c2754ec6fc23236b332a:client/src/components/characterCreation/CreateCharacter.js
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
              <div>
                <Button disabled={activeStep === 0} onClick={this.handleBack}>
                  Back
                </Button>
<<<<<<< HEAD:client/src/components/characterCreation/Build.js
                <Button variant="contained" color="primary" onClick={this.handleNext}>
=======
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                >
>>>>>>> 506526267d15f53dd849c2754ec6fc23236b332a:client/src/components/characterCreation/CreateCharacter.js
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
<<<<<<< HEAD:client/src/components/characterCreation/Build.js
                <Button variant="contained" color="primary" onClick={this.handleNext}>
=======
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                >
>>>>>>> 506526267d15f53dd849c2754ec6fc23236b332a:client/src/components/characterCreation/CreateCharacter.js
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
<<<<<<< HEAD:client/src/components/characterCreation/Build.js
                <Button variant="contained" color="primary" onClick={this.handleNext}>
=======
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                >
>>>>>>> 506526267d15f53dd849c2754ec6fc23236b332a:client/src/components/characterCreation/CreateCharacter.js
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
<<<<<<< HEAD:client/src/components/characterCreation/Build.js
                <Button variant="contained" color="primary" onClick={this.handleNext}>
=======
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                >
>>>>>>> 506526267d15f53dd849c2754ec6fc23236b332a:client/src/components/characterCreation/CreateCharacter.js
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
<<<<<<< HEAD:client/src/components/characterCreation/Build.js
                statRolls={this.props.statRolls}
=======
                statRolls={this.state.statRolls}
>>>>>>> 506526267d15f53dd849c2754ec6fc23236b332a:client/src/components/characterCreation/CreateCharacter.js
                str={this.props.str}
                dex={this.props.dex}
                con={this.props.con}
                int={this.props.int}
                wis={this.props.wis}
                cha={this.props.cha}
                handleSelected={this.handleSelected}
              />
              <div>
                <Button disabled={activeStep === 0} onClick={this.handleBack}>
                  Back
                </Button>
<<<<<<< HEAD:client/src/components/characterCreation/Build.js
                <Button variant="contained" color="primary" onClick={this.handleNext}>
=======
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                >
>>>>>>> 506526267d15f53dd849c2754ec6fc23236b332a:client/src/components/characterCreation/CreateCharacter.js
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
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
<<<<<<< HEAD:client/src/components/characterCreation/Build.js
                <Button variant="contained" color="primary" onClick={this.handleNext}>
=======
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                >
>>>>>>> 506526267d15f53dd849c2754ec6fc23236b332a:client/src/components/characterCreation/CreateCharacter.js
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
    )
  }
}

<<<<<<< HEAD:client/src/components/characterCreation/Build.js
export default withCharacter(Build)
=======
export default withCharacter(CreateCharacter);
>>>>>>> 506526267d15f53dd849c2754ec6fc23236b332a:client/src/components/characterCreation/CreateCharacter.js
