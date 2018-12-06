import React, { Component } from 'react';
import Background from '../components/background-component/background-component';
import Controls from '../components/controls-component/controls-component';
import Rain from '../components/rain-component/rain-component';
import Flower from '../components/flower-component/flower-component';

class App extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			light  : 'neutral',
			cloud  : 'noclouds',
			rain   : 'norain',
			flower : false,
		};
	}

	propsValues = {
		light : [ 'neutral', 'day', 'twilight', 'night' ],
		cloud : [ 'noclouds', 'clouds', 'moreclouds', 'itrains' ],
		rain  : [ 'norain', 'rain', 'heavyrain' ],
	};

	onChangeLight = light => {
		this.setState({ light });
	}

	onChangeClouds = cloud => {
		this.setState({ cloud });
	}

	onChangeRain = rain => {
		this.setState({ rain });
	}

	onTriggerFlower = () => {
		this.setState({ flower: !this.state.flower });
	}

	render() {
		const {
			light,
			cloud,
			rain,
			flower,
		} = this.state;

		const {
			propsValues,
			onChangeLight,
			onChangeClouds,
			onChangeRain,
			onTriggerFlower,
		} = this;

		return (
			<div className="App">
				<Background
					light = { light }
					cloud = { cloud }
					propsValues = { propsValues }
				/>
				<Controls
					onChangeLight = { onChangeLight }
					onChangeClouds = { onChangeClouds }
					onChangeRain = { onChangeRain }
					onTriggerFlower = { onTriggerFlower }
				/>
				{ rain !== 'norain' &&
					<Rain
						rain={ rain }
						propsValues={ propsValues }
					/>
				}
				{ flower &&
					<Flower
						light = { light }
						cloud = { cloud }
						propsValues = { propsValues }
					/>
				}
			</div>
		);
	}
}

export default App;
