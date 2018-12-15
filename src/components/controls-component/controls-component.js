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
		onSelectTypeOfCloud : PropTypes.func,
		clouds              : PropTypes.bool.isRequired,
		moreclouds          : PropTypes.bool.isRequired,
		cloud               : PropTypes.oneOf([ 'noclouds', 'fewclouds', 'clouds', 'moreclouds', 'itrains' ]),
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

	onSelectTypeOfCloud = cloud => {
		const {
			onChangeClouds,
			onTriggerClouds,
		} = this.props;

		onChangeClouds( cloud );
		onTriggerClouds( cloud );
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
			clouds,
			moreclouds,
		} = this.props;

		const { currentHour } = this.state;
		const { onSelectTypeOfCloud } = this;

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
						{ cloud === 'noclouds' &&
							<button className="control-buttom controls__cloud" onClick={ () => onChangeClouds( 'fewclouds' ) }>🌤</button>
						}
						{ ( cloud === 'fewclouds' || cloud === 'clouds' || cloud === 'moreclouds' ) &&
							<React.Fragment>
								<button className={`control-buttom controls__morecloud ${ moreclouds && 'control__erase-buttom' }`} onClick={ () => onSelectTypeOfCloud( 'moreclouds' ) }>☁️</button>
								<button className="control-buttom controls__cloud control__erase-buttom" onClick={ () => onSelectTypeOfCloud( 'noclouds' ) }>🌤</button>
								<button className={`control-buttom controls__highcloud ${ clouds && 'control__erase-buttom' }`} onClick={ () => onSelectTypeOfCloud( 'clouds' ) }>⛅️</button>
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
