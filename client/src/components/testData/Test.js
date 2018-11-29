import React, { Component } from 'react';
import axios from 'axios';
import PromiseHandler from '../api/PromiseHandler';
import { withinView } from '../api/View';
import ClassList from '../lists/ClassList';
import RaceList from '../lists/RaceList';

const cors = 'https://vschool-cors.herokuapp.com/?url=';

export default class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 0
    };
    this.getClassData = this.getClassData.bind(this);
    this.getRaceData = this.getRaceData.bind(this);
  }

  getClassData() {
    const url = 'http://dnd5eapi.co/api/classes';

    const apiQuery = `${cors}${url}`;

    return axios.get(apiQuery).then(response => response.data.results);
  }

  getRaceData() {
    const url = 'http://dnd5eapi.co/api/races';

    const apiQuery = `${cors}${url}`;

    return axios.get(apiQuery).then(response => response.data.results);
  }

  render() {
    return (
      <div>
        <PromiseHandler
          promise={this.getClassData}
          render={withinView(ClassList)}
        />
        <PromiseHandler
          promise={this.getRaceData}
          render={withinView(RaceList)}
        />
      </div>
    );
  }
}
