import React, { Component } from 'react';
import Background from '../components/background-component/background-component';
import Controls from '../components/controls-component/controls-component';
import Rain from '../components/rain-component/rain-component';

class App extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			light : 'neutral',
			cloud : 'noclouds',
			rain  : 'norain',
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

	render() {
		const {
			light,
			cloud,
			rain,
		} = this.state;

		const {
			propsValues,
			onChangeLight,
			onChangeClouds,
			onChangeRain,
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
				/>
				{ rain !== 'norain' &&
					<Rain
						rain = { rain }
						propsValues = { propsValues }
					/>
				}
			</div>
		);
	}
}

export default App;
