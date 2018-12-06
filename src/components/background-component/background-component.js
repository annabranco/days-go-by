import React from 'react';
import PropTypes from 'prop-types';
import hills from '../../assets/images/hills.png';
import grass from '../../assets/images/grass.png';

const Background = ({
	light,
	cloud,
	propsValues,
}) => {

	Background.propTypes = {
		light       : PropTypes.oneOf( propsValues.light ).isRequired,
		cloud       : PropTypes.oneOf( propsValues.cloud ).isRequired,
		propsValues : PropTypes.objectOf( PropTypes.arrayOf( PropTypes.string )),
	};

	return (
		<div className="fixed-elements">
			<div className={`sky ${ light } ${ cloud }`}></div>
			<img className={`hills ${ light } ${ cloud }`} src={ hills } alt="hills" />
			<img className={`grass ${ light } ${ cloud }`} src={ grass } alt="grass" />
		</div>
	);
};

export default Background;

