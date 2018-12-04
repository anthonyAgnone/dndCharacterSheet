import React from 'react';

const StatDisplay = ({statName, statValue}) => {
  return (
    <div>
    {/* display the stats */}
      <h1>{statName}</h1>
      <p>{statValue}</p>
    </div>
  );
};

export default StatDisplay;