import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withUserContext } from '../contexts/UserContext'

class LogIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    console.log('from LogIn component')
    e.preventDefault()
    this.props.login(this.state)
  }

  render() {
    const myButton = props => <button {...props} />
    return (
      <div className="form" onSubmit={this.handleSubmit}>
        <h1>LogIn</h1>
        <form>
          <TextField
            id="userName"
            name="userName"
            label="User Name"
            value={this.state.userName}
            onChange={this.handleChange}
            margin="normal"
          />
          <TextField
            id="password"
            label="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            margin="normal"
          />
          <Button component={myButton} variant="contained" color="primary">
            Send
          </Button>
        </form>
      </div>
    )
  }
}

// export default withGameContext()()(LogIn);
export default withUserContext(LogIn)
