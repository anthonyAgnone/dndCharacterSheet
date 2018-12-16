import React from 'react'
import { withCharacter } from '../../contexts/CharacterContext'

const Stats = ({ getStats }) => {
  // function to DISPLAY STATS NAIL
  // RETURNING VALUES TO USE IN PROFILE.JS
  //
  // ted 11/30/18 <-0 relevant later 3 years later when we see this again
  // # told you so

  const displayStats = () => {
    const a = getStats().statKeysArr
    const b = getStats().statValArr
    // return for (var value in b) {
    //   <p>value</p>
    // }
    return b
  }
  return <div>{displayStats()}</div>
}

export default withCharacter(Stats)
