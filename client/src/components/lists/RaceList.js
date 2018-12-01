import React from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Input from '@material-ui/core/Input'

const RaceList = ({ data }) => {
  const raceElements = data.map(race => (
    <MenuItem key={race._id} id={race._id} value={race.name}>
      <em>{race.name}</em>
    </MenuItem>
  ))
  return (
    <div>
      <Select input={<Input name="age" id="age-helper" />}>{raceElements}</Select>
    </div>
  )
}

export default RaceList
