import React, { Component } from 'react';
import styled from 'styled-components';
import { withCharacter } from '../../contexts/CharacterContext';

import bg from '../lists/assets/classes/class_bg.png';
import barbarian from '../lists/assets/classes/barbarian.png';
import bard from '../lists/assets/classes/bard.png';
import cleric from '../lists/assets/classes/cleric.png';
import druid from '../lists/assets/classes/druid.png';
import fighter from '../lists/assets/classes/fighter.png';
import monk from '../lists/assets/classes/monk.png';
import paladin from '../lists/assets/classes/paladin.png';

const Wrapper = styled.aside`
  width: 40%;
  height: 100%;
  background: #ccc;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  .stats {
    grid-row: 1;
    grid-column: 1 / span 2;
    background: peru;
  }
  .spells {
    grid-row: 2;
    grid-column: 1;
    background: whitesmoke;
  }
  .image {
    grid-row: 2 / span 2;
    grid-column: 2;
    background: powderblue;
  }
  .flavor {
    grid-row: 3;
    grid-column: 1;
    background: blue;
  }
`;

// const Display = ({ name }, { race }) => {
//   return (
//     <Wrapper>
//       <div className="stats">
//         Name:{name} Race:{race}
//       </div>
//       <div className="spells">I am spells</div>
//       <div className="image">I am image</div>
//       <div className="flavor">I am flavor</div>
//     </Wrapper>
//   );
// };

// last img should be placeholder for empty class selection.
const classImgs = [
  barbarian,
  bard,
  cleric,
  druid,
  fighter,
  monk,
  paladin,
  paladin,
  paladin,
  paladin,
  paladin,
  paladin,
  druid
];

const classes = [
  'barbarian',
  'bard',
  'cleric',
  'druid',
  'fighter',
  'monk',
  'paladin',
  'ranger',
  'rogue',
  'sorceror',
  'warlock',
  'wizard',
  ''
];

class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // this doesn't update the image dynamically as props updates. why?
      characterImg: classImgs[classes.indexOf(this.props.cClass)]
    };
  }

  render() {
    return (
      <Wrapper>
        console.log(classImg);
        <div className="stats">
          Name:{this.props.name} Race:{this.props.race} SubRace:
          {this.props.subRace} Gender:
          {this.props.gender} Class:
          {this.props.cClass}
          <br />
          STR:{this.props.str} INT:{this.props.int} <br />
          DEX:{this.props.dex} WIS:{this.props.wis} <br />
          CON:{this.props.con} CHA:{this.props.cha}
        </div>
        <div className="spells">I am spells</div>
        <div className="image">
          <img src={this.state.characterImg} />
        </div>
        <div className="flavor">I am flavor</div>
      </Wrapper>
    );
  }
}
export default withCharacter(Display);
