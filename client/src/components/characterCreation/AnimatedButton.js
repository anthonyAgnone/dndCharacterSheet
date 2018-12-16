import React, { Component } from 'react'
import styled from 'styled-components'
import ParticleEffectButton from 'react-particle-effect-button'

class App extends Component {
  state = {
    hidden: false
  }

  handleClick = () => {
    this.setState(prevState => ({
      hidden: !prevState.hidden
    }))
  }

  render() {
    return (
      <ParticleEffectButton onClick={() => this.handleClick()} color="#121019" hidden={this.state.hidden}>
        {this.props.children}
      </ParticleEffectButton>
    )
  }
}
