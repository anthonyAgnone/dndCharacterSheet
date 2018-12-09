import styled from 'styled-components'
import React, { Component } from 'react'

const Wrapper = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: center;
`
export default class AssignDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // statIndex tracks the index of what stat we are setting, its always one ahead
      statIndex: 0,
      buttonsDisabled: [false, false, false, false, false, false]
    }
  }

  createButtons = statRolls => {
    // temporary button array to return, one for each stat and a clear
    let tmpButArr = []

    for (let i = 0; i < statRolls.length; i++) {
      tmpButArr.push(
        <button
          key={i}
          type="button"
          disabled={this.state.buttonsDisabled[i]}
          onClick={() => {
            this.handleStatAssign(statRolls, i)
          }}>
          {statRolls[i]}
        </button>
      )
    }

    // add a clear button at the end to reset stat allocation
    tmpButArr.push(
      <button
        key={statRolls.length + 1}
        type="button"
        onClick={() => {
          this.handleClear()
        }}>
        Clear Stats
      </button>
    )
    return tmpButArr
  }

  handleStatAssign = (statRolls, i) => {
    this.props.assignStat(statRolls[i], this.state.statIndex)
    // I want to update only an index of the array in state
    // So I'm making a copy, changing it, and setting state variable to it
    let tempStateCopy = this.state.buttonsDisabled
    tempStateCopy[i] = true

    if (this.state.statIndex < statRolls.length - 1) {
      this.setState(prevState => ({
        buttonsDisabled: tempStateCopy,
        statIndex: (prevState.statIndex += 1)
      }))
    } else {
      this.setState({
        buttonsDisabled: tempStateCopy
      })
    }
  }

  handleClear = () => {
    this.setState({
      buttonsDisabled: [false, false, false, false, false, false],
      statIndex: 0
    })
    this.props.clearAssign()
  }
  // {statRolls.join(" ")}
  render() {
    return (
      <Wrapper>
        <div
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '10vh'
          }}>
          <div>
            Stats Rolled : Choose Value for {this.props.statNames[this.state.statIndex].toUpperCase()}
            <br />
            {this.createButtons(this.props.statRolls)}
          </div>
        </div>
      </Wrapper>
    )
  }
}

//export default StatDisplay;
