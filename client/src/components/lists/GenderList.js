import React from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

const GenderList = () => {
  return (
    <div>
      <Select>
        <MenuItem value="male">
          <em>Male</em>
        </MenuItem>
        <MenuItem value="female">
          <em>Female</em>
        </MenuItem>
      </Select>
    </div>
  )
}

export default GenderList
