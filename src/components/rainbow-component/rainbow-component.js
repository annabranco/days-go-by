
import React from 'react';
import PropTypes from 'prop-types';
import rainbow from '../../assets/images/rainbow.gif';

const Rainbow  = ({
	light,
	cloud,
	propsValues,
}) => {

	Rainbow.propTypes = {
		light       : PropTypes.oneOf( propsValues.light ).isRequired,
		cloud       : PropTypes.oneOf( propsValues.cloud ).isRequired,
		propsValues : PropTypes.objectOf( PropTypes.arrayOf( PropTypes.string )),
	};

	return (

<img className={`rainbow ${ light } ${ cloud }`} src={ rainbow } alt="Rainbow" />

	);
};

export default Rainbow;
