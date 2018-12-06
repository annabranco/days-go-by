import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({
	onChangeLight,
	onChangeClouds,
	onChangeRain,
	onTriggerFlower,
	onTriggerRainbow,
	onTriggerClouds,
	onTriggerSun,
}) => {

	Controls.propTypes = {
		onChangeLight    : PropTypes.func.isRequired,
		onChangeClouds   : PropTypes.func.isRequired,
		onChangeRain     : PropTypes.func.isRequired,
		onTriggerFlower  : PropTypes.func.isRequired,
		onTriggerRainbow : PropTypes.func.isRequired,
		onTriggerClouds  : PropTypes.func.isRequired,
		onTriggerSun     : PropTypes.func.isRequired,
	};

	return (

		<div className="teste-console">
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
};

export default Controls;
