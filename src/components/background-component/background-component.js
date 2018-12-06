import React from 'react';
import hills from '../../assets/images/hills.png';
import grass from '../../assets/images/grass.png';

const Background = ({ props }) => {

	return (
		<div className="scenario">
			<div className="sky"></div>
			<img className="hills" src={ hills } alt="hills" />
			<img className="grass" src={ grass } alt="grass" />
		</div>
	);
};

export default Background;
