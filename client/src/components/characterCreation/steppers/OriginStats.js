import React, { Component } from 'react'
import CustomStepper from './StepperBase'
import TabPanel from '../TabPanel'
import axios from 'axios'
import PromiseHandler from '../../api/PromiseHandler'
import { withinView } from '../../api/View'

import RaceList from '../../lists/RaceList'
import ClassList from '../../lists/ClassList'
import AssignStats from '../../statCalculations/AssignStats'
import StatRoll from '../../statCalculations/StatRoll'

import { withCharacter } from '../../../contexts/CharacterContext'

const cors = 'https://vschool-cors.herokuapp.com/?url='

class OriginStats extends Component {
  constructor(props) {
    super(props)

    this.state = {
      statRolls: [0, 0, 0, 0, 0, 0]
    }
  }

  /*
   *
   * AXIOS FUNCTIONS
   *
   */

  getRaceData = () => {
    const url = 'http://dnd5eapi.co/api/races'

    const apiQuery = `${cors}${url}`

    return axios.get(apiQuery).then(response => response.data.results)
  }

  getClassData() {
    const url = 'http://dnd5eapi.co/api/classes'

    const apiQuery = `${cors}${url}`

    return axios.get(apiQuery).then(response => response.data.results)
  }

  /*
   *
   * CHARACTER BUILDER FUNCTIONS
   *
   */

  handleSelected = (category, value) => {
    this.props.setValue(category, value)
  }

  handleRoll = array => {
    this.setState({
      statRolls: array
    })
  }

  render() {
    //Array of Hader Info
    const headerArr = ['Choose Your Race', 'Choose Your Class', 'Roll Stats', 'Assign Stats']

    // Array of StepContent to put in Stepper
    const contentArr = [
      // RACE LIST
      <PromiseHandler promise={this.getRaceData} render={withinView(RaceList)} handleSelected={this.handleSelected} />,
      // CLASS LIST
      <PromiseHandler
        promise={this.getClassData}
        render={withinView(ClassList)}
        handleSelected={this.handleSelected}
      />,
      // STAT ROLL,
      <StatRoll handleRoll={this.handleRoll} />,
      // ASSIGN STATS
      <AssignStats
        handleRoll={this.handleRoll}
        statRolls={this.state.statRolls}
        handleSelected={this.handleSelected}
        race={this.props.race}
        subRace={this.props.subRace}
      />
    ]

    return <CustomStepper className="origin" headerArr={headerArr} contentArr={contentArr} />
    //return <TabPanel />;
  }
}

export default withCharacter(OriginStats)
