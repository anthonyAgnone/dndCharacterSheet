import React, { Component } from 'react'
import CustomStepper from './StepperBase'
import TabPanel from '../TabPanel'
import axios from 'axios'
import PromiseHandler from '../../api/PromiseHandler'
import { withinView } from '../../api/View'

import GenderList from '../../lists/GenderList'
import AlignmentList from '../../lists/AlignmentList'
import { withCharacter } from '../../../contexts/CharacterContext'

const cors = 'https://vschool-cors.herokuapp.com/?url='

class BackgroundStepper extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  /*
   *
   * AXIOS FUNCTIONS
   *
   */

  /*
   *
   * CHARACTER BUILDER FUNCTIONS
   *
   */

  handleSelected = (category, value) => {
    this.props.setValue(category, value)
  }

  render() {
    //Array of Hader Info
    const headerArr = [
      'Choose Your Gender',
      'Choose Your Alignment',
      'Something Else Here',
      'Something Else Here Again'
    ]

    // Array of StepContent to put in Stepper
    const contentArr = [
      // Gender List
      <GenderList handleSelected={this.handleSelected} />,
      // Alignment
      <AlignmentList handleSelected={this.handleSelected} />,
      // dont know yet
      <div />,
      // dont know yet
      <div />
    ]

    return <CustomStepper className="background" headerArr={headerArr} contentArr={contentArr} />
    //return <TabPanel />;
  }
}

export default withCharacter(BackgroundStepper)
