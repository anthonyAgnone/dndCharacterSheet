import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

// import bg from './assets/darkBg.png'
import buttonbg from './assets/buttonbg.png';
import OriginStats from './steppers/OriginStats';
import BackgroundStepper from './steppers/BackgroundStepper';

// import border from './assets/border3.png'
// import testborder from './assets/testborder2.png'
// import { darken, lighten } from 'polished'
const Wrapper = styled.div`
	width: 62vw;
	height: 100%;
	padding: 5em 0;
	position: relative;
	margin: auto;
`;

function TabContainer({ children, dir }) {
	return (
		<Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
			{children}
		</Typography>
	);
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
	dir: PropTypes.string.isRequired
};

const styles = theme => ({
	root: {
		// backgroundColor: theme.palette.background.paper,
		height: '100%'
	},
	indicator: {
		borderBottom: '2px solid yellow',
		backgroundColor: 'green'
	}
});

class TabPanel extends Component {
	state = {
		value: 0
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	handleChangeIndex = index => {
		this.setState({ value: index });
	};

	render() {
		const { classes, theme } = this.props;

		return (
			<Wrapper>
				<div className={classes.root}>
					<AppBar position="relative" color="default">
						<Tabs
							value={this.state.value}
							onChange={this.handleChange}
							fullWidth
							color="primary"
							style={{
								border: '3px solid black',
								backgroundImage: `url(${buttonbg})`,
								color: '#d9e1be'
							}}
						>
							<Tab label="Race/Class/Stats" />
							<Tab label="Background" />
							<Tab label="Talents/Spells" />
							<Tab label="Equipment" />
						</Tabs>
					</AppBar>
					<SwipeableViews
						axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
						index={this.state.value}
						onChangeIndex={this.handleChangeIndex}
					>
						<TabContainer dir={theme.direction}>
							<OriginStats />
						</TabContainer>
						<TabContainer dir={theme.direction}>
							<BackgroundStepper />
						</TabContainer>
						<TabContainer dir={theme.direction}>Item Three</TabContainer>
						<TabContainer dir={theme.direction}>Item four</TabContainer>
					</SwipeableViews>
				</div>
			</Wrapper>
		);
	}
}

TabPanel.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(TabPanel);
