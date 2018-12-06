import React from 'react';
import sunImg from '../../assets/images/sun.gif';

const TheSun = thesun => {

console.log(thesun.thesun);

	return (

		<img className={`sun ${ thesun.thesun }`} src={ sunImg } alt="Sun" />

	);
};

export default TheSun;
