import React from 'react';
import PropTypes from 'prop-types';

const Stars = () => {

	Stars.propTypes = {
		NUMBER_OF_STARS : PropTypes.number,
		STAR            : PropTypes.arrayOf( PropTypes.string ),
		COLORS          : PropTypes.arrayOf( PropTypes.string ),
		ANIMATIONS      : PropTypes.arrayOf( PropTypes.string ),
		LIMIT_BOTTOM    : PropTypes.number,
		LIMIT_RIGHT     : PropTypes.number,
		createX         : PropTypes.number,
		createY         : PropTypes.number,
		positionX       : PropTypes.number,
		positionY       : PropTypes.number,
	};

	const NUMBER_OF_STARS = 500;
	const STAR            = [ '・', '∙', '・', '.', '✶', '✴︎', '∙', '・', '.', '・', '∙', '・', '.', '∙', '・' ];
	const COLORS          = [ 'rgba(244, 236, 164, 0.7)', 'rgba(255, 255, 255, 0.9)', 'rgba(244, 164, 164, 0.9)', 'rgba(255, 255, 255, 0.9)', 'rgba(188, 234, 240, 0.9)', 'rgba(255, 255, 255, 0.9)' ];
	const ANIMATIONS      = [ 'twinkle', 'twinkletwinkle', 'twinkle', 'twinkletwinkle', 'none', 'twinkle', 'twinkletwinkle', 'twinkle', 'twinkletwinkle' ];
	const LIMIT_BOTTOM    = window.innerHeight;
	const LIMIT_RIGHT     = window.innerWidth;

	const createX 	= () => Math.round( Math.random() * 10000 );
	const createY 	= () => Math.round( Math.random() * 1000 );
	const STARS 		= [];
	let 	positionX = 0;
	let 	positionY = 0;

	const generateStarryNight = () => {

		for ( let i = 1; i <= NUMBER_OF_STARS; i++ ) {
			const _star = {
				starForm            : '',
				starColor           : '',
				starSize            : '',
				positionFromTop     : '',
				positionFromRight   : '',
				typeOfShinning      : '',
				waitToStartShinning : '',
				timeCycleOfShinning : '',
			};

			const verifyX = () => {
				positionX = createX();
				if ( positionX >= LIMIT_RIGHT ) verifyX();
				else {
					_star.starForm = STAR[ Math.round( Math.random() * 14 ) ];
					_star.starColor = COLORS[ Math.floor( Math.random() * 5 ) ];
					_star.starSize = `${ Math.random() }rem`;
					_star.positionFromRight = `${ positionX }px`;
					_star.typeOfShinning = ANIMATIONS[ Math.floor( Math.random() * 8 ) ];
					_star.waitToStartShinning = `${ Math.floor( Math.random() * 5 ) }s`;
					_star.timeCycleOfShinning = `${ Math.ceil( Math.random() * 30 ) + 1 }s`;
				}
			};

			const verifyY = () => {
				positionY = createY();
				if ( positionY >= LIMIT_BOTTOM ) verifyY();
				else _star.positionFromTop = `${ positionY }px`;
				STARS.push( _star );
			};

			verifyX();
			verifyY();
		}
		console.log( STARS );
	};

	generateStarryNight();

	return (
		<React.Fragment>
			{ STARS.map(( star, index ) => <p
				className="star"
				style={{
					color             : star.starColor,
					fontSize          : star.starSize,
					top               : star.positionFromTop,
					right             : star.positionFromRight,
					animationName     : star.typeOfShinning,
					animationDelay    : star.waitToStartShinning,
					animationDuration : star.timeCycleOfShinning,
				}}
				key={ index }
			>
				{ star.starForm }
			</p> )
			}
		</React.Fragment>
	);
};

export default Stars;
