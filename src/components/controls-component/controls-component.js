import React from 'react';
import PropTypes from 'prop-types';
import Roundy from 'roundy';

class Controls extends React.Component {

	constructor( props ) {
		super( props );
		this.state = {
			currentHour : 0,
			light       : '',
		};
	}

	static propTypes = {
		onChangeLight      	: PropTypes.func.isRequired,
		onChangeClouds      : PropTypes.func.isRequired,
		onChangeRain        : PropTypes.func.isRequired,
		onTriggerFlower     : PropTypes.func.isRequired,
		onTriggerRainbow    : PropTypes.func.isRequired,
		onTriggerClouds     : PropTypes.func.isRequired,
		onTriggerSun        :	PropTypes.func.isRequired,
		onChangeHoursSlider : PropTypes.func.isRequired,
		light               : PropTypes.oneOf([ 'neutral', 'morning', 'day', 'afternoon', 'night' ]),
	};

	componentDidMount() {
		const { light } = this.props;
		this.setState({ light });
		console.log( this.props );
	}

	componentDidChange() {
		const { light } = this.state;
		const sliderHandler = document.querySelector( '.sliderHandle' );

		sliderHandler.classList.remove( 'neutral', 'morning', 'day', 'afternoon', 'night' );
		sliderHandler.classList.add( light );

		// switch ( light ) {
		// default:
		// 	this.setState({ light: 'neutral' });
		// 	break;
		// case 'morning':
		// 		sliderHandler.classList.add( light );
		// 	break;
		// case 'day':
		// 	this.setState({ light: 'day' });
		// 	break;
		// case 'afternoon':
		// 	this.setState({ light: 'afternoon' });
		// 	break;
		// case 'night':
		// 	this.setState({ light: 'night' });
		// 	break;
		// }
	}

	render() {

		const {
			onChangeLight,
			onChangeClouds,
			onChangeRain,
			onTriggerFlower,
			onTriggerRainbow,
			onTriggerClouds,
			onTriggerSun,
			onChangeHoursSlider,
		} = this.props;

		const { currentHour } = this.state;

		return (

			<div className="teste-console">
				<Roundy
					value={ currentHour }
					min={ 0 }
					max={ 24 }
					step={ 6 }
					radius={ 80 }
					sliced
					color="pink"
					onChange={ value => this.setState({ currentHour: value }) }
					onAfterChange={ () => onChangeHoursSlider( currentHour )}
				/>
				<p className="teste-title">Light Controls</p>
				<button className="teste-buttom" onClick={ () => onChangeLight( 'neutral' ) }>neutral</button>
				<button className="teste-buttom" onClick={ () => onChangeLight( 'day' ) }>day</button>
				<button className="teste-buttom" onClick={ () => onChangeLight( 'twilight' ) }>twilight</button>
				<button className="teste-buttom" onClick={ () => onChangeLight( 'night' ) }>night</button>
				<p className="teste-title">Cloud Controls</p>
				<button className="teste-buttom" onClick={ () => onChangeClouds( 'noclouds' ) }>clearsky</button>
				<button className="teste-buttom" onClick={ () => onChangeClouds( 'clouds' ) }>clouds</button>
				<button className="teste-buttom" onClick={ () => onChangeClouds( 'moreclouds' ) }>moreclouds</button>
				<button className="teste-buttom" onClick={ () => onChangeClouds( 'itrains' ) }>itrains</button>
				<p className="teste-title">Rain Controls</p>
				<button className="teste-buttom" onClick={ () => onChangeRain( 'norain' ) }>norain</button>
				<button className="teste-buttom" onClick={ () => onChangeRain( 'rain' ) }>rain</button>
				<button className="teste-buttom" onClick={ () => onChangeRain( 'heavyrain' ) }>heavyrain</button>
				<p className="teste-title">Atmosphere Controls</p>
				<button className="teste-buttom" onClick={ () => onTriggerClouds( 'noclouds' ) }>noclouds</button>
				<button className="teste-buttom" onClick={ () => onTriggerClouds( 'highclouds' ) }>highclouds</button>
				<button className="teste-buttom" onClick={ () => onTriggerClouds( 'lowcloud' ) }>lowcloud</button>
				<p className="teste-title">Events Controls</p>
				<button className="teste-buttom" onClick={ () => onTriggerSun() }>sun</button>
				<button className="teste-buttom" onClick={ () => onTriggerFlower() }>flower</button>
				<button className="teste-buttom" onClick={ () => onTriggerRainbow() }>rainbow</button>
			</div>
		);
	}
}

export default Controls;
