import React from 'react';
import DieRolled from './DieRolled';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const StatDisplay = ({ rolledStats, lowestIndex }) => {
  const elements = rolledStats.map((val, i) => (
    <DieRolled key={i} isLowest={i === lowestIndex} num={val} />
  ));
  return <Wrapper>{elements}</Wrapper>;
};

export default StatDisplay;
