import React, { memo } from 'react';

const RenderAge = ({ age }) => {
	console.log('component RenderAge được render');

	return <h1>Tuổi là: {age} </h1>;
};

export default memo(RenderAge);
