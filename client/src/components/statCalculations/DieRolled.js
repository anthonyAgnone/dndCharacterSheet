import React, { Component, createRef } from 'react';
import styled from 'styled-components';

import { TimelineMax, Power2 } from 'gsap';

const Scene = styled.div`
  width: 80px;
  height: 80px;
  transform-style: preserve-3d;
  margin-right: 40px;
  .side {
    position: absolute;
    width: 80px;
    height: 80px;
    background: #fff;
    box-shadow: inset 0 0 10px #ccc;
    border-radius: 4px;
    border: 2px solid #000;
    display: grid;
    grid-template:
      repeat(3, calc(100% / 3)) /
      repeat(3, calc(100% / 3));
    justify-items: center;
    align-items: center;
    .dot {
      width: 16px;
      height: 16px;
      border-radius: 23px;
      background: #444;
      box-shadow: inset 5px 0 10px #000;
    }
    .dot:first-child {
      grid-row: 2;
      grid-column: 2;
    }
    .dot:nth-child(2) {
      grid-row: 3;
      grid-column: 3;
    }
    .dot:nth-child(3) {
      grid-row: 1;
      grid-column: 1;
    }
    .dot:nth-child(4) {
      grid-row: 1;
      grid-column: 3;
    }
    .dot:nth-child(5) {
      grid-row: 3;
      grid-column: 1;
    }
  }
  .side.top .dot:first-child {
    grid-row: 1;
    grid-column: 1;
  }
  .side.left .dot:first-child {
    grid-row: 3;
    grid-column: 1;
  }
  .side.back {
    .dot:first-child {
      grid-row: 2;
      grid-column: 1;
    }
    .dot:nth-child(2) {
      grid-row: 3;
      grid-column: 3;
    }
    .dot:nth-child(3) {
      grid-row: 1;
      grid-column: 1;
    }
    .dot:nth-child(4) {
      grid-row: 1;
      grid-column: 3;
    }
    .dot:nth-child(5) {
      grid-row: 3;
      grid-column: 1;
    }
    .dot:last-child {
      grid-row: 2;
      grid-column: 3;
    }
  }
  .cover,
  .inner {
    background: #e0e0e0;
    box-shadow: none;
  }
  .cover {
    border-radius: 0;
    transform: translateZ(0px);
    &.x {
      transform: rotateY(90deg);
    }
    &.z {
      transform: rotateX(90deg);
    }
  }
  .front {
    transform: translateZ(40px);
    &.inner {
      transform: translateZ(38px);
    }
  }
  .back {
    transform: rotateX(-180deg) translateZ(40px);
    &.inner {
      transform: rotateX(-180deg) translateZ(38px);
    }
  }
  .right {
    transform: rotateY(90deg) translateZ(40px);
    &.inner {
      transform: rotateY(90deg) translateZ(38px);
    }
  }
  .left {
    transform: rotateY(-90deg) translateZ(40px);
    &.inner {
      transform: rotateY(-90deg) translateZ(38px);
    }
  }
  .top {
    transform: rotateX(90deg) translateZ(40px);
    &.inner {
      transform: rotateX(90deg) translateZ(38px);
    }
  }
  .bottom {
    transform: rotateX(-90deg) translateZ(40px);
    &.inner {
      transform: rotateX(-90deg) translateZ(38px);
    }
  }
`;
export default class DieRolled extends Component {
  constructor(props) {
    super(props);
    this.die = createRef();
    this.animation = null;
    this.reset = null;
  }

  rollDie = () => {
    const positions = [
      {
        x: 0,
        y: 0,
        z: 0
      },
      {
        x: -90,
        y: 0,
        z: 0
      },
      {
        x: 0,
        y: -90,
        z: 0
      },
      {
        x: 0,
        y: 90,
        z: 0
      },
      {
        x: 90,
        y: -360,
        z: 360
      },
      {
        x: 0,
        y: -180,
        z: 0
      }
    ];

    this.animation = new TimelineMax();
    this.animation
      .to(this.die.current, 0.5, {
        rotationX: 1080,
        rotationY: 1080,
        rotationZ: 1080
      })
      .to(
        this.die.current,
        2,
        {
          rotationX: positions[this.props.num - 1].x,
          rotationY: positions[this.props.num - 1].y,
          rotationZ: positions[this.props.num - 1].z
        },
        `+=${this.props.delay * 0.98}`
      );
  };

  componentDidUpdate(prevProps) {
    this.rollDie();
  }
  componentDidMount() {
    this.rollDie();
  }

  makeRandom = (min, max) => {
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(random);
    return random;
  };

  render() {
    return (
      <Scene id="dice" ref={this.die}>
        <div className="side front">
          <div className="dot" />
        </div>
        <div className="side front inner" />
        <div className="side top">
          <div className="dot dtop dleft" />
          <div className="dot dbottom dright" />
        </div>
        <div className="side top inner" />
        <div className="side right">
          <div className="dot dtop dleft" />
          <div className="dot center" />
          <div className="dot dbottom dright" />
        </div>
        <div className="side right inner" />
        <div className="side left">
          <div className="dot dtop dleft" />
          <div className="dot dtop dright" />
          <div className="dot dbottom dleft" />
          <div className="dot dbottom dright" />
        </div>
        <div className="side left inner" />
        <div className="side bottom">
          <div className="dot center" />
          <div className="dot dtop dleft" />
          <div className="dot dtop dright" />
          <div className="dot dbottom dleft" />
          <div className="dot dbottom dright" />
        </div>
        <div className="side bottom inner" />
        <div className="side back">
          <div className="dot dtop dleft" />
          <div className="dot dtop dright" />
          <div className="dot dbottom dleft" />
          <div className="dot dbottom dright" />
          <div className="dot center dleft" />
          <div className="dot center dright" />
        </div>
        <div className="side back inner" />
        <div className="side cover x" />
        <div className="side cover y" />
        <div className="side cover z" />
      </Scene>
    );
  }
}
