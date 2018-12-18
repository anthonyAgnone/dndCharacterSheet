import React, { createContext, Component } from 'react'
import { withRouter } from 'react-router-dom'
const { Provider, Consumer } = createContext()

class CreationContext extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 0
    }
  }

  handleNextPage = from => {
    if (from === 'origin') {
      this.props.history.push({ pathname: '/create-character/stats' })
    } else if (from === 'stats') {
      this.props.history.push({ pathname: '/create-character/background' })
    }
  }

  handlePrevPage = from => {
    if (from === 'stats') {
      this.props.history.push({ pathname: '/create-character' })
    } else if (from === 'background') {
      this.props.history.push({ pathname: '/create-character/stats' })
    }
  }

  render() {
    const props = {
      handlePrevPage: this.handlePrevPage,
      handleNextPage: this.handleNextPage,
      ...this.state
    }
    return <Provider value={props}>{this.props.children}</Provider>
  }
}

export const withCreation = C => props => <Consumer>{value => <C {...value} {...props} />}</Consumer>

export default withRouter(CreationContext)
