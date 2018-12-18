import React, { Component } from 'react'
import styled from 'styled-components'

import Avatar from '@material-ui/core/Avatar'
import FolderIcon from '@material-ui/icons/Folder'
import grey from '@material-ui/core/colors/grey'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

import { withCharacter } from '../../contexts/CharacterContext'
import { withRouter } from 'react-router-dom'

const CardWrapper = styled.div`
  width: 250px;
  height: 350px;
  display: grid;
  grid-template-rows: 15% 70% 15%;
  box-shadow: 5px 5px 10px #333;
  border-radius: 4px;
  background-color: #570002;
  & .card-header {
    grid-row: 1;
    display: flex;
    justify-content: space-between;
    padding: 0 15px 5px 5px;
    align-items: flex-end;
  }
  & .card-body {
    grid-row: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${grey[300]};
  }
  & .card-footer {
    display: flex;
    justify-content: space-between;
  }
`

class Card extends Component {
  render() {
    return (
      <CardWrapper>
        <div className="card-header">
          <Avatar>
            <FolderIcon />
          </Avatar>
          <h3>{this.props.name}</h3>
        </div>
        <div className="card-body">
          <Fab onClick={() => this.props.history.push(`/create-character/`)} color="grey[500]">
            <AddIcon />
          </Fab>
        </div>
        <div className="card-footer" />
      </CardWrapper>
    )
  }
}

export default withRouter(withCharacter(Card))
