import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

import buttonbg from '../characterCreation/assets/buttonbg.png'
import ind from './tabIndicator.png'

const Wrapper = styled.nav`
  width: 58vw;
  display: flex;
  justify-content: flex-end;
  height: 4vh;
  position: absolute;
  top: 10vh;
  left: 0;
  z-index: 99999999999999999;
  button {
    background-image: url(${buttonbg});
    width: 180px;
    height: 100%;
    border: 2px solid black;
    color: #d9e1be;
    outline: none;
    cursor: pointer;
    :focus {
      outline: none;
    }
  }
  .tabIndicator {
    position: absolute;
    bottom: 0;
    left: 20vw;
    height: 39px;
    width: 200px;
    background: url(${ind});
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translate(${props => props.left * 180}px, 100%);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`

class TabMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 0
    }
  }

  handleClick = (to, page) => {
    this.props.history.push(to)
    this.setState({
      page
    })
  }

  render() {
    return (
      <Wrapper left={this.state.page}>
        <Button exact onClick={() => this.handleClick('/create-character', 0)}>
          Race/Class/Stats
        </Button>
        <Button onClick={() => this.handleClick('/create-character/background', 1)}>Background</Button>
        <Button onClick={() => this.handleClick('/create-character/talents', 2)}>Talents/Spells</Button>
        <Button onClick={() => this.handleClick('/create-character/equipment', 3)}>Equipment</Button>
        <div className="tabIndicator" />
      </Wrapper>
    )
  }
}

export default withRouter(TabMenu)
