import React from 'react';

const RaceList = ({ data }) => {
  const raceElements = data.map(race => (
    <option key={race._id} id={race._id}>
      {race.name}
    </option>
  ));
  return (
    <div>
      <select name="races" id="races">
        {raceElements}
      </select>
    </div>
  );
};

export default RaceList;
