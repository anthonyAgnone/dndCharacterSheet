import React, { Component } from 'react';
import styled from 'styled-components';
import StepHeader from './stepperComponents/StepHeader';
import StepContent from './stepperComponents/StepContent';
import { withCharacter } from '../../../contexts/CharacterContext';
import bg from '../assets/darkBg.png';

const Wrapper = styled.div`
  width: 60vw;
  height: calc(100% - 11em);
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(0,0);
  background-color: #221e1f;
  background-image: url('${bg}');
`;
//header of active section should be 2em . 2.2em
const Step = styled.div`
	padding: 0 20px 24px 50px;
	position: relative;
	transition: all 0.4s ease-in-out;
	${'' /* &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 1px;
    background-color: #570002;
    left: calc(50px / 2);
    transform: translateY(-20px);
    top: 0;
    z-index: 1;
  } */}
	&.minimized {
		transition: background-color 0.3s ease-in-out;
		cursor: pointer;
		:hover {
			background-color: rgba(0, 0, 0, 0.06);
		}
		.step-content {
			height: 0;
			padding: 0;
		}
	}
`;

const ButtonContainer = styled.div`
	width: 33%;
	margin: 0 auto;
	display: flex;
	justify-content: space-around;
	button {
		border: 0;
		padding: 10px 20px;
		border-radius: 4px;
		background-color: #7f7174;
		box-shadow: 0 5px 10px -3px rgba(99, 99, 0, 0.3);
		color: #d9e1be;
		transition: all 0.3s ease-in-out;
		cursor: pointer;
		&:hover {
			background-color: #570002;
		}
		&:focus {
			outline: 0;
		}
	}
	.next-button {
		background-color: #570002;
		color: #d9e1be;
		&:hover {
			background-color: #d9e1be;
			color: #570002;
		}
	}
`;

class StepperBase extends Component {
	constructor(props) {
		super(props);

		this.state = {
			step: 0
		};
	}

	/*
	 *
	 * STEPPER FUNCTIONS
	 *
	 */

	handleActiveStep = step => {
		if (step === this.state.step) return 'step';
		else return 'step minimized';
	};

	handleNextStep = () => {
		this.setState(
			prevState => ({
				step: prevState.step -= 100
			}),
			() => {
				setTimeout(() => {
					this.setState(prevState => ({
						step: prevState.step += 101
					}));
				}, 400);
			}
		);
	};

	handleLastStep = () => {
		if (this.state.step !== 0) {
			this.setState(
				prevState => ({
					step: prevState.step -= 100
				}),
				() => {
					setTimeout(() => {
						this.setState(prevState => ({
							step: prevState.step += 99
						}));
					}, 400);
				}
			);
		}
	};

	render() {
		let stepArr = [];
		for (let i = 0; i < this.props.headerArr.length; i++) {
			stepArr.push(
				<Step className={this.state.step === i ? 'step' : 'step minimized'}>
					<StepHeader active={this.state.step === i}>{this.props.headerArr[i]}</StepHeader>
					<StepContent>{this.props.contentArr[i]}</StepContent>
				</Step>
			);
		}
		return (
			<Wrapper>
				{stepArr}
				<ButtonContainer className="buttons">
					<button className="back-btn" onClick={() => this.handleLastStep()}>
						back
					</button>
					<button className="next-button" onClick={() => this.handleNextStep()}>
						Next
					</button>
				</ButtonContainer>
			</Wrapper>
		);
	}
}

export default withCharacter(StepperBase);
