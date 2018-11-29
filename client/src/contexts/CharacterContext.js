import React, { createContext, Component, createRef } from 'react';

const { Provider, Consumer } = createContext();

export default class CharacterContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      race: '',
      class: '',
      level: 1,
      background: '',
      alignment: '',
      experience: 0,
      str: 0,
      dex: 0,
      const: 0,
      int: 0,
      wis: 0,
      charisma: 0,
      inspiration: false,
      proficiency: 0,
      perception: 0,
      proficiences: {},
      savingThrows: {
        str: 0,
        dex: 0,
        const: 0,
        int: 0,
        wis: 0,
        char: 0
      },
      skills: {},
      armor: 0,
      init: 0,
      spd: 0,
      maxHP: 0,
      hp: 0,
      tempHP: 0,
      hitDie: 0,
      deathSaves: {
        success: 0,
        failurs: 0
      },
      personalityTraits: {},
      features: {},
      ideals: {},
      bonds: {},
      flaws: {},
      attacks: {},
      equipment: {
        equiped: {},
        inventory: {},
        cp: 0,
        sp: 0,
        ep: 0,
        gp: 0,
        pp: 0
      },
      appearance: '',
      age: 0,
      height: 0,
      weight: 0,
      eyes: '',
      skin: '',
      hair: '',
      allies: {},
      characterBackstory: '',
      treasure: []
    };
  }

  render() {
    const props = {
      ...this.state
    };
    return <Provider value={props}>{this.props.children}</Provider>;
  }
}

export const withCharacter = C => props => (
  <Consumer>{value => <C {...value} {...props} />}</Consumer>
);
