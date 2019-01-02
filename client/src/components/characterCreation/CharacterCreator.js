import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { withRouter } from 'react-router-dom';

import OriginStats from './steppers/OriginStats';
import BackgroundStepper from './steppers/BackgroundStepper';
import Display from './Display';
import TabMenu from '../menu/TabMenu';

import bg from './assets/darkBg.png';

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  background-color: #221e1f;
  background-image: url('${bg}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  overflow: hidden;

  & .fade-enter {
    transform: translateX(70%);
  }


    & .fade-enter-active{
    transform: translateX(0);
    transition: all 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .fade-exit {
    transform: translateX(0);
    z-index: 200;
  }

  .fade-exit-active {
    transform: translateX(-100%);
    transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1);                   
  }
`;
// Change names of steppers. Look to abstract stepper

class CharacterCreator extends Component {
	componentDidMount() {
		console.log(this.props.location.key);
	}
	render() {
		return (
			<Wrapper>
				<TabMenu />
				<TransitionGroup component={null}>
					<CSSTransition
						in={true}
						appear={false}
						key={this.props.location.key}
						classNames="fade"
						timeout={{ enter: 600, exit: 600 }}
					>
						<Switch location={this.props.location}>
							<Route exact path="/create-character" component={OriginStats} />
							<Route path="/create-character/background" component={BackgroundStepper} />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
				<Display />
			</Wrapper>
		);
	}
}

export default withRouter(CharacterCreator);
