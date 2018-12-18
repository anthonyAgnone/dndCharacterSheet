import React, { Component, createRef } from 'react'
import StatDisplay from './StatDisplay'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  button {
    border: 0;
    padding: 10px 20px;
    border-radius: 4px;
    background-color: #570002;
    box-shadow: 0 5px 10px -3px rgba(99, 99, 0, 0.3);
    color: #d9e1be;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
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
  }
  .next-button {
    background-color: #570002;
    color: #d9e1be;
    &:hover {
      background-color: #d9e1be;
      color: #570002;
    }
  }
`
export default class StatRoll extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rolledStats: [],
      finalValues: [],
      sum: 0,
      lowestIndex: 0
    }
    this.rollButton = createRef()
  }

  generateStat = () => {
    // set die min max
    let max = 6
    let min = 1

    //define temporary array
    let tempArray = []

    for (let i = 0; i < 4; i++) {
      let random = Math.round(min + Math.random() * (max - min))
      tempArray.push(random)
    }

    let lowestIndex = tempArray.indexOf(Math.min(...tempArray))

    let sum = tempArray.reduce((accumulator, currentValue) => accumulator + currentValue) - tempArray[lowestIndex]

    this.setState({
      rolledStats: tempArray,
      lowestIndex: lowestIndex,
      sum: sum
    })

    if (this.state.finalValues.length < 6) {
      const newArray = [...this.state.finalValues]
      newArray.push(sum)
      this.setState({ finalValues: newArray }, () => {
        if (this.state.finalValues.length === 6) {
          this.rollButton.current.disabled = true
          this.props.handleRoll(this.state.finalValues)
        }
      })
    }
  }

  render() {
    return (
      <Wrapper>
        <StatDisplay
          rolledStats={this.state.rolledStats}
          lowestIndex={this.state.lowestIndex}
          finalValues={this.state.finalValues}
        />
        <button
          ref={this.rollButton}
          type="button"
          onClick={() => {
            this.generateStat(this.props.statName)
          }}
        >
          r o l l
        </button>
      </Wrapper>
    )
  }
}
