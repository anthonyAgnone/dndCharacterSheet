import React, { Component } from 'react';
import axios from 'axios';
import PromiseHandler from '../api/PromiseHandler';
import { withinView } from '../api/View';
import ClassList from '../lists/ClassList';

const cors = 'https://vschool-cors.herokuapp.com/?url=';

export default class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 0
    };
    this.getClassData = this.getClassData.bind(this);
  }

  getClassData() {
    const url = 'http://dnd5eapi.co/api/classes';

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
      </div>
    );
  }
}
