import React from 'react';
import PropTypes from 'prop-types';

const CloudsHigh = ({
	light,
	cloud,
	propsValues,
}) => {

	CloudsHigh.propTypes = {
		light       : PropTypes.oneOf( propsValues.light ).isRequired,
		cloud       : PropTypes.oneOf( propsValues.cloud ).isRequired,
		propsValues : PropTypes.objectOf( PropTypes.arrayOf( PropTypes.string ) ),
	};

	return (

		<div className={ `clouds-high ${ light } ${ cloud }` }></div>

	);
};

export default CloudsHigh;
