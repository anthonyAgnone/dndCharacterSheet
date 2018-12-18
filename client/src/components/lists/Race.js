import React, { Component, createRef } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import elf from './assets/races/portraitElf.png'
import bg from './assets/misc/portraitFrame.png'

const Wrapper = styled.div`
  height: 100px;
  width: 100px;
  position: absolute;
  left: ${props => (props.expanded ? '0' : (props.index % 3) * 33.33333333)}%;
  top: ${props => (props.expanded ? '0' : Math.floor(props.index / 3) * 33.33333333)}%;
  background-color: peru;
  ${'' /* background-image: url(${bg}); */}
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  padding: 3%;
  img {
    height: 100%;
    width: 100%;
    position: relative;
  }
  .hover {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -100%);
    top: 100px;
    width: 100%;
    height: 2em;
    background-color: rgba(33, 33, 33, 0.67);
    color: #fff;
    transition: all 0.3s ease-in-out;
    opacity: 0;
    text-align: center;
    overflow: hidden;
    height: 0;
  }
  .visible {
    height: 2em;
    z-index: 9999;
    opacity: 1;
  }
  .close {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(33, 33, 33, 0.67);
    transition: all 0.3s ease-in-out;
    opacity: 0;
    text-align: center;
    overflow: hidden;
    height: 0;
    color: #fff;
  }
  .closeVisible {
    height: 2em;
    z-index: 9999;
    opacity: 1;
  }
  &.expanded {
    height: 300px;
    width: 300px;
    transition: all 0.5s ease-in-out;
  }
  &:first-child {
    background-color: #009688;
    :hover {
      background-color: ${darken(0.2, '#009688')};
    }
  }
  &:nth-child(2) {
    background-color: #00e5ff;
    :hover {
      background-color: ${darken(0.2, '#00e5ff')};
    }
  }
  &:nth-child(3) {
    background-color: #00897b;
    :hover {
      background-color: ${darken(0.2, '#00897b')};
    }
  }
  &:nth-child(4) {
    background-color: #64dd17;
    :hover {
      background-color: ${darken(0.2, '#64dd17')};
    }
  }
  &:nth-child(5) {
    background-color: #cddc39;
    :hover {
      background-color: ${darken(0.2, '#cddc39')};
    }
  }
  &:nth-child(6) {
    background-color: #757575;
    :hover {
      background-color: ${darken(0.2, '#757575')};
    }
  }
  &:nth-child(7) {
    background-color: #ff6d00;
    :hover {
      background-color: ${darken(0.2, '#ff6d00')};
    }
  }
  &:nth-child(8) {
    background-color: #311b92;
    :hover {
      background-color: ${darken(0.2, '#311b92')};
    }
  }
  &:last-child {
    background-color: #d4e157;
    :hover {
      background-color: ${darken(0.2, '#d4e157')};
    }
  }
`

export default class Race extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false,
      hoverVisible: false
    }
    this.race = createRef()
  }

  handleExpand = () => {
    this.setState(
      prevState => ({
        expanded: !prevState.expanded,
        hoverVisible: false
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
    console.log(this.race.current)
  }

  handleHoverOver = () => {
    if (!this.state.expanded) {
      this.setState({
        hoverVisible: true
      })
    } else {
      this.setState({
        hoverVisible: false
      })
    }
  }

  handleHoverOut = () => {
    this.setState({
      hoverVisible: false
    })
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
        onMouseOver={() => this.handleHoverOver()}
        onMouseOut={() => this.handleHoverOut()}
      >
        <img
          src={elf}
          alt=""
          onClick={() => {
            handleSelected('race', name)
            handleSelected('subRace', '')
            this.handleExpand()
          }}
        />
        <div className={this.state.hoverVisible ? 'hover visible' : 'hover'}>
          <h3>{name}</h3>
        </div>

        <div className={this.state.expanded ? 'close closeVisible' : 'close'}>Click to close</div>
      </Wrapper>
    )
  }
}
