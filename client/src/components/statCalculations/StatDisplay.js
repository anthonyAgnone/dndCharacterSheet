import React from 'react';

const StatDisplay = ({statName, statValue}) => {
  return (
    <div>
      <h1>{statName}</h1>
      <p>{statValue}</p>
    </div>
  );
};

export default StatDisplay;