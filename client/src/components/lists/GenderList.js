import React from 'react';
import styled from 'styled-components';
import male from './assets/misc/male.png';
import female from './assets/misc/female.png';

const GenderSelect = styled.div`
  width: 50vw;
  margin: 0 auto;
  height: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & img {
    height: 55%;
    width: auto;
  }
  & img:hover {
    cursor: pointer;
  }
`;

const GenderList = ({ handleSelected }) => {
  return (
    <GenderSelect>
      <img
        src={male}
        alt="male icon"
        onClick={() => handleSelected('gender', 'Male')}
      />
      <img
        src={female}
        alt="female icon"
        onClick={() => handleSelected('gender', 'Female')}
      />
    </GenderSelect>
  );
};

export default GenderList;
