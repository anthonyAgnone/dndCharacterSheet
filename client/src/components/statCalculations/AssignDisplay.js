import styled from 'styled-components'
import React, { Component } from 'react'

const Button = styled.button`
  border: 0;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 0 5px 10px -3px rgba(0, 0, 0, 0.3);
  color: #d9e1be;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  background-color: #570002;
  margin-right: 1em;
  color: #d9e1be;
  &:disabled {
    background-color: #60564d;
    color: #7f7174;
    cursor: not-allowed;
    pointer-events: none;
  }
  &:hover {
    background-color: #d9e1be;
    color: #570002;
  }
  &:focus {
    outline: 0;
  }
`

const Wrapper = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
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
        <Button
          key={i}
          type="button"
          disabled={this.state.buttonsDisabled[i]}
          onClick={() => {
            this.handleStatAssign(statRolls, i)
          }}
        >
          {statRolls[i]}
        </Button>
      )
    }

    // add a clear button at the end to reset stat allocation
    tmpButArr.push(
      <Button
        key={statRolls.length + 1}
        type="button"
        onClick={() => {
          this.handleClear()
        }}
      >
        Clear Stats
      </Button>
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
      <div style={{ height: '100%', textAlign: 'center' }}>
        <h3>Stats Rolled : Choose Value for {this.props.statNames[this.state.statIndex].toUpperCase()}</h3>
        <Wrapper>{this.createButtons(this.props.statRolls)}</Wrapper>
      </div>
    )
  }
}

//export default StatDisplay;
