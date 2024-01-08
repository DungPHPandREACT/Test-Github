import React from 'react';

const RenderName = ({ name }) => {
	console.log('component RenderName được render');

	return <h1>Tên là: {name}</h1>;
};

export default React.memo(RenderName);
