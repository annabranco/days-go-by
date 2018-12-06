import React, { Component } from 'react';
import Background from '../components/background-component/background-component';
import Controls from '../components/controls-component/controls-component';
import Rain from '../components/rain-component/rain-component';
import Flower from '../components/flower-component/flower-component';
import Rainbow from '../components/rainbow-component/rainbow-component';
import Cloud from '../components/cloud-component/cloud-component';
import CloudsHigh from '../components/cloudshigh-component/cloudshigh-component';

class App extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			light     : 'neutral',
			cloud     : 'noclouds',
			rain      : 'norain',
			flower    : false,
			rainbow   : false,
			lowcloud  : false,
			highcloud : false,
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

	onTriggerRainbow = () => {
		this.setState({ rainbow: !this.state.rainbow });
	}

	onTriggerLowCloud = () => {
		this.setState({ lowcloud: !this.state.lowcloud });
	}

	onTriggerHighCloud = () => {
		this.setState({ highcloud: !this.state.highcloud });
	}

	render() {
		const {
			light,
			cloud,
			rain,
			flower,
			rainbow,
			lowcloud,
			highcloud,
		} = this.state;

		const {
			propsValues,
			onChangeLight,
			onChangeClouds,
			onChangeRain,
			onTriggerFlower,
			onTriggerRainbow,
			onTriggerLowCloud,
			onTriggerHighCloud,
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
					onTriggerRainbow = { onTriggerRainbow }
					onTriggerLowCloud = { onTriggerLowCloud }
					onTriggerHighCloud = { onTriggerHighCloud }
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
				{ rainbow &&
					<Rainbow
						light = { light }
						cloud = { cloud }
						propsValues = { propsValues }
					/>
				}
				{ lowcloud &&
					<Cloud
						light = { light }
						cloud = { cloud }
						propsValues = { propsValues }
					/>
				}
				{ highcloud &&
					<CloudsHigh
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
