import React, { Component } from 'react';
import Background from '../components/background-component/background-component';
import Controls from '../components/controls-component/controls-component';
import Rain from '../components/rain-component/rain-component';
import Flower from '../components/flower-component/flower-component';
import Rainbow from '../components/rainbow-component/rainbow-component';
import Cloud from '../components/cloud-component/cloud-component';
import CloudsHigh from '../components/cloudshigh-component/cloudshigh-component';
import TheSun from '../components/sun-component/sun-component';

class App extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			light      : 'neutral',
			cloud      : 'noclouds',
			rain       : 'norain',
			flower     : false,
			rainbow    : false,
			lowcloud   : false,
			highclouds : false,
			sun        : '',
		};
	}

	propsValues = {
		light : [ 'neutral', 'day', 'twilight', 'night' ],
		cloud : [ 'noclouds', 'clouds', 'moreclouds', 'itrains' ],
		rain  : [ 'norain', 'rain', 'heavyrain' ],
		sun   : [ '', 'sunrise', 'sunset' ],
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

	onTriggerClouds = clouds => {
		console.log( clouds );
		if ( clouds === 'noclouds' ) this.setState({
			lowcloud   : false,
			highclouds : false,
		});
		else if ( clouds === 'highclouds' ) this.setState({ highclouds: !this.state.highclouds });
		else if ( clouds === 'lowcloud' ) this.setState({ lowcloud: !this.state.lowcloud });
	}

	onTriggerSun = () => {
		if ( this.state.sun === '' ) this.setState({ sun: 'sunrise' });
		else if ( this.state.sun === 'sunrise' ) {
			this.setState({ sun: 'sunset' });
			setTimeout(() => this.setState({ sun: '' }), 3000 );
		}
	}

	render() {
		const {
			light,
			cloud,
			rain,
			flower,
			rainbow,
			lowcloud,
			highclouds,
			sun,
		} = this.state;

		const {
			propsValues,
			onChangeLight,
			onChangeClouds,
			onChangeRain,
			onTriggerFlower,
			onTriggerRainbow,
			onTriggerClouds,
			onTriggerSun,
		} = this;

		return (
			<div className="App">
				<Controls
					onChangeLight = { onChangeLight }
					onChangeClouds = { onChangeClouds }
					onChangeRain = { onChangeRain }
					onTriggerFlower = { onTriggerFlower }
					onTriggerRainbow = { onTriggerRainbow }
					onTriggerClouds = { onTriggerClouds }
					onTriggerSun = { onTriggerSun }
				/>
				<Background
					light = { light }
					cloud = { cloud }
					propsValues = { propsValues }
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
				{ highclouds &&
					<CloudsHigh
						light = { light }
						cloud = { cloud }
						propsValues = { propsValues }
					/>
				}
				{ sun !== '' &&
				<TheSun thesun={ sun }/>
				}
				<p className="author">Anna Branco</p>
      	<p className="version">v0.6</p>
			</div>
		);
	}
}

export default App;
