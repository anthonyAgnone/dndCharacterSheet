import React from 'react';
import styled from 'styled-components';

import one from './assets/one.png';
import two from './assets/two.png';
import three from './assets/three.png';
import four from './assets/four.png';
import five from './assets/five.png';
import six from './assets/six.png';

// const Die = styled.img`
//   opacity: ${props => (props.isLowest ? '.1' : '1')};
// `;

const Scene = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid #ccc;
  perspective: 400px;
  margin-right: 40px;
  .cube {
    width: 80px;
    height: 80px;
    position: relative;
    transform-style: preserve-3d;
    transform: translateZ(0deg) rotateY(0deg) rotateX(0deg);
    animation-delay: ${props => props.delay}s;
    background-color: #fff;
    .face {
      position: absolute;
      width: 80px;
      height: 80px;
      background: #fff;
      box-shadow: inset 0 0 40px #ccc;
      border-radius: 4px;
      overflow: hidden;
      background-position: 50% 50%;
      display: grid;
      grid-template: repeat(3, calc(100% / 3)) / repeat(3, calc(100% / 3));
      justify-items: center;
      align-items: center;
      .dot {
        background: #444;
        box-shadow: inset 3px 0 6px #000;
        border: 2px solid black;
        width: 16px;
        height: 16px;
        border-radius: 50%;
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
        grid-row: 2;
        grid-column: 1;
      }
      .dot:nth-child(5) {
        grid-row: 3;
        grid-column: 1;
      }
    }
    .face.back .dot:first-child {
      grid-row: 1;
      grid-column: 1;
    }
    .face.left .dot:first-child {
      grid-row: 3;
      grid-column: 1;
    }
    .face.bottom {
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
    .front {
      transform: rotateY(0deg) translateZ(40px);
    }
    .right {
      transform: rotateY(90deg) translateZ(40px);
    }
    .back {
      transform: rotateY(180deg) translateZ(40px);
    }
    .left {
      transform: rotateY(-90deg) translateZ(40px);
    }
    .top {
      transform: rotateX(90deg) translateZ(40px);
    }
    .bottom {
      transform: rotateX(-90deg) translateZ(40px);
    }
  }
  .cube.show-1 {
    animation-name: rotationOne;
    animation-duration: 4s;
    animation-fill-mode: forwards;
  }
  .cube.show-2 {
    animation-name: rotationTwo;
    animation-duration: 4s;
    animation-fill-mode: forwards;
  }
  .cube.show-3 {
    animation-name: rotationThree;
    animation-duration: 4s;
    animation-fill-mode: forwards;
  }
  .cube.show-4 {
    animation-name: rotationFour;
    animation-duration: 4s;
    animation-fill-mode: forwards;
  }
  .cube.show-5 {
    animation-name: rotationFive;
    animation-duration: 4s;
    animation-fill-mode: forwards;
  }
  .cube.show-6 {
    animation-name: rotationSix;
    animation-duration: 4s;
    animation-fill-mode: forwards;
  }
  @keyframes rotationOne {
    20% {
      transform: rotateY(0deg) rotateX(-180deg) rotateZ(-140deg);
    }
    100% {
      transform: rotateY(720deg) rotateX(360deg) rotateZ(360deg);
    }
  }
  @keyframes rotationTwo {
    60% {
      transform: rotateY(0deg) rotateX(180deg) rotateZ(-140deg);
    }
    100% {
      transform: rotateY(540deg) rotateX(360deg) rotateZ(360deg);
    }
  }
  @keyframes rotationThree {
    20% {
      transform: rotateY(0deg) rotateX(-180deg) rotateZ(-140deg);
    }
    100% {
      transform: rotateY(-90deg) rotateX(720deg) rotateZ(360deg);
    }
  }
  @keyframes rotationFour {
    100% {
      transform: rotateY(90deg) rotateX(360deg) rotateZ(720deg);
    }
  }
  @keyframes rotationFive {
    100% {
      transform: rotateX(-90deg) rotateZ(720deg) rotateY(360deg);
    }
  }
  @keyframes rotationSix {
    100% {
      transform: rotateX(90deg) rotateY(-360deg) rotateZ(-720deg);
    }
  }
`;

const arrayOfImages = [one, two, three, four, five, six];

export default function DieRolled({ num, isLowest, delay }) {
  return (
    <Scene delay={delay}>
      <div className={`cube show-${num}`}>
        <div className="face front">
          <div className="dot" />
        </div>
        <div className="face back">
          <div className="dot" />
          <div className="dot" />
        </div>
        <div className="face right">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
        <div className="face left">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
        <div className="face top">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
        <div className="face bottom">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
      </div>
    </Scene>
  );
}
