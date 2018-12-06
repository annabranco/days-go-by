import React from 'react';
import PropTypes from 'prop-types';
import cloudImg from '../../assets/images/cloud.png';

const Cloud = ({
	light,
	cloud,
	propsValues,
}) => {

	Cloud.propTypes = {
		light       : PropTypes.oneOf( propsValues.light ).isRequired,
		cloud       : PropTypes.oneOf( propsValues.cloud ).isRequired,
		propsValues : PropTypes.objectOf( PropTypes.arrayOf( PropTypes.string )),
	};

	return (

		<img className={`cloud ${ light } ${ cloud }`} src={ cloudImg } alt="cloud" />

	);
};

export default Cloud;
