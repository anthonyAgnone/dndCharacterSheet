import React, { Component, createRef } from 'react'
import styled from 'styled-components'
import elf from './assets/races/portraitElf.png'

const Wrapper = styled.div`
  height: 100px;
  width: 100px;
  position: absolute;
  left: ${props => (props.expanded ? '0' : (props.index % 3) * 33.33333333)}%;
  top: ${props => (props.expanded ? '0' : Math.floor(props.index / 3) * 33.33333333)}%;
  background-color: peru;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  img {
    height: 100%;
    width: 100%;
  }
  &.expanded {
    height: 300px;
    width: 300px;
    transition: all 0.5s ease-in-out;
  }
  &:first-child {
    background-color: #009688;
  }
  &:nth-child(2) {
    background-color: #00e5ff;
  }
  &:nth-child(3) {
    background-color: #00897b;
  }
  &:nth-child(4) {
    background-color: #64dd17;
  }
  &:nth-child(5) {
    background-color: #cddc39;
  }
  &:nth-child(6) {
    background-color: #757575;
  }
  &:nth-child(7) {
    background-color: #ff6d00;
  }
  &:nth-child(8) {
    background-color: #311b92;
  }
  &:last-child {
    background-color: #d4e157;
  }
`

export default class Race extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false
    }
    this.race = createRef()
  }

  handleExpand = () => {
    this.setState(
      prevState => ({
        expanded: !prevState.expanded
      }),
      () => {
        if (this.state.expanded) this.race.current.style.zIndex = 1000
        else if (!this.state.expanded) {
          setTimeout(() => {
            this.race.current.style.zIndex = 1
          }, 300)
        }
      }
    )
  }

  render() {
    const {
      handleSelected,
      index,
      data: { name }
    } = this.props
    return (
      <Wrapper
        ref={this.race}
        key={index}
        index={index}
        expanded={this.state.expanded}
        className={this.state.expanded ? 'test expanded' : 'test'}
        onClick={() => {
          handleSelected('race', name)
          handleSelected('subRace', '')
          this.handleExpand()
        }}
      >
        <img src={elf} alt="" />
      </Wrapper>
    )
  }
}
