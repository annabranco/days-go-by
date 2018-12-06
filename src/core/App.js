import React, { Component } from 'react';
import Background from '../components/background-component/background-component';

class App extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			light : 'day',
			cloud : '',
		};
	}

	propsValues = {
		light : [ 'neutral', 'day', 'twilight', 'night' ],
		cloud : [ '', 'clouds', 'moreclouds', 'itrains' ],
	};

	render() {
		const {
			light,
			cloud,
		} = this.state;

		return (
			<div className="App">
				<Background
					light = { light }
					cloud = { cloud }
					propsValues = { this.propsValues }
				/>
			</div>
		);
	}
}

export default App;
