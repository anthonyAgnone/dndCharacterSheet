import React from 'react';

const StatDisplay = ({ statName, statValue }) => {
  return (
    <div>
      {/* display the stats */}
      <h1>{statName}</h1>
      {/* have all the stuffs in here make abstracted */}
      <p>{statValue}</p>
    </div>
  );
};

export default StatDisplay;
