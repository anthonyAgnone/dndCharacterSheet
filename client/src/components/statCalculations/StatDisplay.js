import React from "react";
import DieRolled from "./DieRolled";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: center;
`;

const StatDisplay = ({ rolledStats, lowestIndex, finalValues }) => {
  const elements = rolledStats.map((val, i) => (
    <DieRolled key={i} isLowest={i === lowestIndex} num={val} />
  ));
  return (
    <Wrapper>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "10vh"
        }}
      >
        {elements}
        <div>
          Stats Rolled
          <br />
          {finalValues.join(" ")}
        </div>
      </div>
    </Wrapper>
  );
};

export default StatDisplay;
