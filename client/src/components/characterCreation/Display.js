import React from 'react'
import { withCharacter } from '../../contexts/CharacterContext'
import styled from 'styled-components'
import { darken, lighten } from 'polished'

import bg from '../lists/assets/misc/testBG.png'
import border from './assets/border3.png'
import testborder from './assets/testborder2.png'
import buttonbg from './assets/buttonbg.png'

const Wrapper = styled.aside`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  :after {
    content: '';
    height: calc(83% + 1px);
    width: 80%;
    mix-blend-mode: overlay;
    border: 3px solid black;
    background-image: url(${testborder});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.8;
    clip-path: polygon(
      0 2em,
      0% 100%,
      3vmin 100%,
      3vmin 6vmin,
      calc(100% - 3vmin) 6vmin,
      calc(100% - 3vmin) calc(100% - 3vmin),
      3vmin calc(100% - 3vmin),
      3vmin 100%,
      100% 100%,
      100% 2em
    );
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .tabGroup {
    width: 80%;
    height: 2em;
    display: flex;
    button {
      height: 2em;
      width: 100%;
      border: none;
      border: 3px solid black;
      background-color: #570002;
      color: #d9e1be;
      background-image: url(${buttonbg});
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      ::hover {
        background-color: #d9e1be;
        color: #570002;
      }
    }
  }
  .inner {
    background-image: url(${bg});
    border: solid 3vmin #eee;
    border-bottom-color: ${lighten(0.03, '#570002')};
    border-left-color: #570002;
    border-right-color: #570002;
    border-top-color: ${darken(0.03, '#570002')};
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.45) inset, 0 5px 10px 5px rgba(0, 0, 0, 0.25);
    width: 80%;
    height: 80vh;
    padding: 4vmin;
    position: relative;
    text-align: center;
    &:before {
      border-radius: 2px;
      bottom: -1vmin;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25) inset;
      content: '';
      left: -1vmin;
      position: absolute;
      right: -1vmin;
      top: -1vmin;
    }
    &:after {
      background-image: url(${border});
      background-position: center center;
      background-size: 95% 96%;
      background-repeat: no-repeat;
      border-radius: 2px;
      bottom: -1.5vmin;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
      content: '';
      left: -1.5vmin;
      position: absolute;
      right: -1.5vmin;
      top: -1.5vmin;
      mix-blend-mode: multiply;
    }
    .row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      height: 3em;
      width: 90%;
      margin: 0 auto;
      .statTitle {
        font-size: 2.3em;
        font-weight: 700;
        color: #570002;
        opacity: 0.8;
        text-align: left;
      }
      p {
        font-size: 1.8em;
        font-weight: 400;
        color: ${darken(0.5967, '#ECD7AC')};
        text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.07);
      }
    }
    .statsSection {
      width: 100%;
      margin-top: 2em;
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      justify-items: center;
      h1 {
        font-weight: 700;
        color: #570002;
        opacity: 0.8;
      }
      p {
        font-size: 1.4em;
        font-weight: 400;
        color: ${darken(0.5967, '#ECD7AC')};
        text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.07);
      }
    }
  }
`

const NewDisplay = ({ name, race, cClass, str, dex, con, int, wis, cha, ...props }) => {
  return (
    <Wrapper>
      <div className="tabGroup">
        <button>Origin</button>
        <button>Stats</button>
        <button>Background</button>
        <button>Appearence</button>
        <button>Skills</button>
      </div>
      <div className="inner">
        <h1>Your Character</h1>
        <div className="row">
          <h1 className="statTitle">Name: </h1>
          <p>{name}</p>
        </div>
        <div className="row">
          <h1 className="statTitle">Race: </h1>
          <p>{race}</p>
        </div>
        <div className="row">
          <h1 className="statTitle">Class: </h1>
          <p>{cClass}</p>
        </div>
        <div className="statsSection">
          <h1>Str</h1>
          <h1>Dex</h1>
          <h1>Con</h1>
          <h1>Int</h1>
          <h1>Wis</h1>
          <h1>Cha</h1>
          <p>{str}</p>
          <p>{dex}</p>
          <p>{con}</p>
          <p>{int}</p>
          <p>{wis}</p>
          <p>{cha}</p>
        </div>
      </div>
    </Wrapper>
  )
}

export default withCharacter(NewDisplay)
