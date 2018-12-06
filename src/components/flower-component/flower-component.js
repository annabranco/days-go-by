
import React from 'react';
import PropTypes from 'prop-types';
import flowerImg from '../../assets/images/flower.png';

const Flower = ({
	light,
	cloud,
	propsValues,

}) => {

	Flower.propTypes = {
		light       : PropTypes.oneOf( propsValues.light ).isRequired,
		cloud       : PropTypes.oneOf( propsValues.cloud ).isRequired,
		propsValues : PropTypes.objectOf( PropTypes.arrayOf( PropTypes.string )),
	};

	return (

		<img className={`flower flower--animate ${ light } ${ cloud }`} src={ flowerImg } alt="flower" />

	);
};

export default Flower;
