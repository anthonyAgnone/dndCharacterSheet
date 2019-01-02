import React, { Component } from 'react';
import styled from 'styled-components';

import lawfulGood from './assets/alignment/lawfulGood.png';
import neutralGood from './assets/alignment/neutralGood.png';
import chaoticGood from './assets/alignment/chaoticGood.png';
import lawfulNeutral from './assets/alignment/lawfulNeutral.png';
import trueNeutral from './assets/alignment/trueNeutral.png';
import chaoticNeutral from './assets/alignment/chaoticNeutral.png';
import lawfulEvil from './assets/alignment/lawfulEvil.png';
import neutralEvil from './assets/alignment/neutralEvil.png';
import chaoticEvil from './assets/alignment/chaoticEvil.png';

const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  background:yellow;
  position: relative;
  display: grid;
  grid-template-columns: 33.333% 33.333% 33.333%;
  align-items: center;
  & img {
    position: relative;
    bottom: 0px;
    align-self: end;
    width: 100%;
    height:100%;
    transition: all 0.3s easeInOut;
  }
  & img:hover {
    transform:scale(.95, .95);
    );
  }
`;

const alignmentImgs = [
  lawfulGood,
  neutralGood,
  chaoticGood,
  lawfulNeutral,
  trueNeutral,
  chaoticNeutral,
  lawfulEvil,
  neutralEvil,
  chaoticEvil
];
const alignments = [
  'Lawful Good',
  'Neutral Good',
  'Chaotic Good',
  'Lawful Neutral',
  'True Neutral',
  'Chaotic Neutral',
  'Lawful Evil',
  'Neutral Evil',
  'Chaotic Evil'
];

//export default AlignmentList;
export default class AlignmentList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // let subRaceArr = [];

    const alignElements = alignments.map((data, i) => (
      <img
        onClick={() => {
          this.props.handleSelected('alignment', alignments[i]);
        }}
        //  style={style[i + 1]}
        src={alignmentImgs[i]}
        //  className={races[race.name]}
        alt=""
      />
    ));
    return <Wrapper>{alignElements}</Wrapper>;
  }
}
