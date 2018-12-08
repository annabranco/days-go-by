import React from 'react';
import PropTypes from 'prop-types';

class Stars extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			light           : '',
			NUMBER_OF_STARS : 500,
			STARS_OBJ       : [],
		};
	}

	static propTypes = {
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
		light           : PropTypes.oneOf([ 'neutral', 'morning', 'day', 'afternoon', 'night' ]),
		cloud           : PropTypes.oneOf([ 'noclouds', 'clouds', 'moreclouds', 'itrains' ]),
		propsValues     : PropTypes.objectOf( PropTypes.arrayOf( PropTypes.string )),
	};

	STAR = [ '・', '∙', '・', '.', '✶', '✴︎', '∙', '・', '.', '・', '∙', '・', '.', '∙', '・' ];
	COLORS = [ 'rgba(244, 236, 164, 0.7)', 'rgba(255, 255, 255, 0.9)', 'rgba(244, 164, 164, 0.9)', 'rgba(255, 255, 255, 0.9)', 'rgba(188, 234, 240, 0.9)', 'rgba(255, 255, 255, 0.9)' ];
	ANIMATIONS = [ 'twinkle', 'twinkletwinkle', 'twinkle', 'twinkletwinkle', 'none', 'twinkle', 'twinkletwinkle', 'twinkle', 'twinkletwinkle' ];
	LIMIT_BOTTOM = window.innerHeight;
	LIMIT_RIGHT = window.innerWidth;

	STARS_OBJ = [];

	componentDidMount() {
		const { cloud } = this.props;

		switch ( cloud ) {
		default:
		case 'noclouds':
			this.setState({ NUMBER_OF_STARS: 500 });
			break;
		case 'clouds':
			this.setState({ NUMBER_OF_STARS: 200 });
			break;
		case 'moreclouds':
		case 'itrains':
			this.setState({ NUMBER_OF_STARS: 100 });
			break;
		}
	}

	componentDidUpdate( prevProps, prevState ) {
		const { light } = this.props;
		console.log( prevProps.light, light );

		if ( prevProps.light !== light ) this.setState({ light });

		if ( prevProps.light !== 'night' && light === 'night' ) this.generateStarryNight();
	}

	generateCoordX = () => {
		let positionX = 0;
		do positionX = Math.round( Math.random() * this.LIMIT_RIGHT );
		while ( positionX >= this.LIMIT_RIGHT );
		return positionX;
	}

	generateCoordY = () => {
		let positionY = 0;
		do positionY = Math.round( Math.random() * this.LIMIT_RIGHT );
		while ( positionY >= this.LIMIT_BOTTOM );
		return positionY;
	}

	generateStarryNight = () => {
		const { NUMBER_OF_STARS } = this.state;
		const {
			STARS_OBJ,
			STAR,
			COLORS,
			ANIMATIONS,
			generateCoordY,
			generateCoordX,
		} = this;

		for ( let i = 1; i <= NUMBER_OF_STARS; i++ ) {
			const _star = {
				starForm            : '',
				starColor           : '',
				starSize            : '',
				positionFromTop     : '',
				positionFromLeft    : '',
				typeOfShinning      : '',
				waitToStartShinning : '',
				timeCycleOfShinning : '',
			};

			_star.starForm = STAR[ Math.round( Math.random() * 14 ) ];
			_star.starColor = COLORS[ Math.floor( Math.random() * 5 ) ];
			_star.starSize = `${ Math.random() }rem`;
			_star.positionFromTop = `${ generateCoordY() }px`;
			_star.positionFromLeft = `${ generateCoordX() }px`;
			_star.typeOfShinning = ANIMATIONS[ Math.floor( Math.random() * 8 ) ];
			_star.waitToStartShinning = `${ Math.floor( Math.random() * 5 ) }s`;
			_star.timeCycleOfShinning = `${ Math.ceil( Math.random() * 30 ) + 1 }s`;
			STARS_OBJ.push( _star );
		}
		this.setState({ STARS_OBJ });
	}

	render() {
		const { STARS_OBJ } = this.state;

		return (
			<div className="starryStarryNight">
				<div className="stars__wrapper">
					{ STARS_OBJ &&
							STARS_OBJ.map(( star, index ) => <p
								className="star"
								style={{
									color             : star.starColor,
									fontSize          : star.starSize,
									top               : star.positionFromTop,
									left              : star.positionFromLeft,
									animationName     : star.typeOfShinning,
									animationDelay    : star.waitToStartShinning,
									animationDuration : star.timeCycleOfShinning,
								}}
								key={ index }
							>
								{ star.starForm }
							</p> )
					}
				</div>
			</div>
		);
	}
}

export default Stars;
