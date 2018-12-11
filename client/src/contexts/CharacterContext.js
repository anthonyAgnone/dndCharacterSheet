import React, { createContext, Component } from 'react';
const { Provider, Consumer } = createContext();

export default class CharacterContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      race: '',
      subRace: '',
      cClass: '',
      level: 1,
      background: '',
      alignment: '',
      experience: 0,
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      cha: 0,
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

  changeStat = (name, statChange) => {
    this.setState(prevState => ({
      [name]: (prevState[name] += statChange)
    }));
  };

  getStats = () => {
    const statKeysArr = Object.keys(this.state);
    const statValArr = [];
    Object.values(this.state).map(stat => statValArr.push(stat + '\n'));
    return { statKeysArr, statValArr };
  };

  setValue = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  statsDone = () => {
    console.log(
      `Stats complete for ${this.state.name} the level ${this.state.level} ${
        this.state.race
      } ${this.state.cClass}`
    );
  };

  setValue = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  statsDone = () => {
    console.log(
      `Stats complete for ${this.state.name} the level ${this.state.level} ${
        this.state.race
      } ${this.state.cClass}`
    );
  };

  render() {
    const props = {
      changeStat: this.changeStat,
      getStats: this.getStats,
      setValue: this.setValue,
      statsDone: this.statsDone,
      ...this.state
    };
    return <Provider value={props}>{this.props.children}</Provider>;
  }
}

export const withCharacter = C => props => (
  <Consumer>{value => <C {...value} {...props} />}</Consumer>
);
