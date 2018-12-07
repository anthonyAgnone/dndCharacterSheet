import React, { createContext, Component } from "react";
import CreateCharacter from "../components/characterCreation/CreateCharacter";
const { Provider, Consumer } = createContext();

export default class CharacterContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      race: "",
      cClass: "",
      level: 1,
      background: "",
      alignment: "",
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
      appearance: "",
      age: 0,
      height: 0,
      weight: 0,
      eyes: "",
      skin: "",
      hair: "",
      allies: {},
      characterBackstory: "",
      treasure: []
    };
    this.changeStat = this.changeStat.bind(this);
    this.getStats = this.getStats.bind(this);
  }

  changeStat(name, statChange) {
    this.setState(prevState => ({
      [name]: (prevState[name] += statChange)
    }));
  }

  getStats() {
    const statKeysArr = Object.keys(this.state);
    const statValArr = [];
    Object.values(this.state).map(stat => statValArr.push(stat + "\n"));
    return { statKeysArr, statValArr };
  }

  setValue = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  statsDone = () => {
    console.log(
      "Stats Complete for " +
        this.state.name +
        " the lvl " +
        this.state.level +
        " " +
        this.state.race +
        " " +
        this.state.cClass
    );
  };
  render() {
    const props = {
      changeStat: this.changeStat,
      getStats: this.getStats,
      ...this.state
    };

    return (
      <div>
        <CreateCharacter
          setValue={this.setValue}
          charVal={this.state}
          statsDone={this.statsDone}
        />
        <Provider value={props}>{this.props.children}</Provider>
      </div>
    );
  }
}

export const withCharacter = C => props => (
  <Consumer>{value => <C {...value} {...props} />}</Consumer>
);
