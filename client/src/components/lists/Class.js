import React, { Component, createRef } from 'react'
import styled from 'styled-components'
import elf from './assets/races/portraitElf.png'
import bg from './assets/misc/portraitFrame.png'

const Wrapper = styled.div`
  height: 100px;
  width: 100px;
  position: absolute;
  left: ${props => (props.expanded ? '0' : (props.index % 4) * 25)}%;
  top: ${props => (props.expanded ? '0' : Math.floor(props.index / 4) * 33.3333)}%;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  padding: 3%;
  :before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    height: 85%;
    width: 85%;
    content: '';
    pointer-events: none;
  }
  :after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url(${bg});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 95%;
    width: 95%;
    content: '';
    pointer-events: none;
  }
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
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.5s ease-in-out;
  }
`

export default class Class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false,
      hoverVisible: false
    }
    this.class = createRef()
  }

  handleExpand = () => {
    this.setState(
      prevState => ({
        expanded: !prevState.expanded,
        hoverVisible: false
      }),
      () => {
        if (this.state.expanded) this.class.current.style.zIndex = 1000
        else if (!this.state.expanded) {
          setTimeout(() => {
            this.class.current.style.zIndex = 1
          }, 300)
        }
      }
    )
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
        ref={this.class}
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
            handleSelected('cClass', name)
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
