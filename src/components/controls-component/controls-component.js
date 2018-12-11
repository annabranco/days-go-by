import React from 'react';
import PropTypes from 'prop-types';
import Roundy from 'roundy';

class Controls extends React.Component {

	constructor( props ) {
		super( props );
		this.state = {
			currentHour : 6,
			light       : 'morning',
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
		cloud               : PropTypes.oneOf([ 'noclouds', 'clouds', 'moreclouds', 'itrains' ]),
		light               : PropTypes.oneOf([ 'neutral', 'morning', 'day', 'afternoon', 'night' ]),
	};

	componentDidMount() {
		const { light } = this.props;
		this.setState({ light });
	}

	componentDidChange() {
		// const { light } = this.state;
		// const sliderHandler = document.querySelector( '.sliderHandle' );
		// const lights = [ 'morning', 'day', 'afternoon', 'night' ];
		// sliderHandler.classList.add( light );
		// const index = lights.indexOf( light );
		// if ( index > -1 ) lights.splice( index, 1 );
		// setTimeout(() => {
		// 	for ( const _light of lights ) sliderHandler.classList.remove( _light );
		// }, 5000 );

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
			cloud,
		} = this.props;

		const { currentHour } = this.state;

		return (

			<React.Fragment>

				<div className="controls__console-wrapper">
					<div className="controls__console-inner">
						{/* <i className="fas fa-sun sun--icon"></i>
						<i className="fas fa-moon moon--icon"></i> */}
						<i className="controls__icon moon--icon">🌜</i>
						<i className="controls__icon sun--icon">☀️</i>
						<i className="controls__icon sun--icon-down">☀️</i>
						<i className="controls__icon sun--icon-up">☀️</i>
						<i className="controls__icon sun--icon-down-arrow">︎⬇︎</i>
						<i className="controls__icon sun--icon-up-arrow">⬆︎</i>
						<i className="controls__icon--open">►</i>
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
						{ cloud !== 'clouds' &&
							<button className="control-buttom controls__cloud" onClick={ () => onChangeClouds( 'clouds' ) }>🌤</button>
						}
						{ cloud === 'clouds' &&
							<React.Fragment>
								<button className="control-buttom controls__morecloud" onClick={ () => onChangeClouds( 'clouds' ) }>☁️</button>
								<button className="control-buttom controls__cloud control__erase-buttom" onClick={ () => onChangeClouds( 'noclouds' ) }>🌤</button>
								<button className="control-buttom controls__highcloud" onClick={ () => onChangeClouds( 'clouds' ) }>⛅️</button>
							</React.Fragment>
						}
					</div>
				</div>
				<div className="teste-console">

					<p className="teste-title">Light Controls</p>
					<button className="teste-buttom" onClick={ () => onChangeLight( 'morning' ) }>morning</button>
					<button className="teste-buttom" onClick={ () => onChangeLight( 'day' ) }>day</button>
					<button className="teste-buttom" onClick={ () => onChangeLight( 'afternoon' ) }>afternoon</button>
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
			</React.Fragment>

		);
	}
}

export default Controls;
