import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import styled from 'styled-components'
import axios from 'axios'
import PromiseHandler from '../api/PromiseHandler'
import { withinView } from '../api/View'
import RaceList from '../lists/RaceList'
import GenderList from '../lists/GenderList'
import FormControl from '@material-ui/core/FormControl'

const cors = 'https://vschool-cors.herokuapp.com/?url='

const Form = styled.form`
  width: 50vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  & input {
    width: 100%;
  }
`

export default class CreateCharacter extends Component {
  constructor(props) {
    super(props)

    this.state = {}
    this.getRaceData = this.getRaceData.bind(this)
  }

  getRaceData() {
    const url = 'http://dnd5eapi.co/api/races'

    const apiQuery = `${cors}${url}`

    return axios.get(apiQuery).then(response => response.data.results)
  }

  render() {
    return (
      <div>
        <h1>Your new shiny Character</h1>
        <div className="form" onSubmit={this.handleSubmit}>
          <h1>Register</h1>
          <Form>
            <FormControl>
              <TextField id="name" label="name" name="name" margin="normal" />
              <PromiseHandler promise={this.getRaceData} render={withinView(RaceList)} />
              <GenderList />
            </FormControl>
          </Form>
        </div>
      </div>
    )
  }
}
