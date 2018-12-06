import React from 'react';
import PropTypes from 'prop-types';

const Rain = ({
	rain,
	propsValues,
}) => {

	Rain.propTypes = {
		rain        : PropTypes.oneOf( propsValues.cloud ).isRequired,
		propsValues : PropTypes.objectOf( PropTypes.arrayOf( PropTypes.string )),
	};

	return (

		<div className={ rain }></div>

	);
};

export default Rain;
