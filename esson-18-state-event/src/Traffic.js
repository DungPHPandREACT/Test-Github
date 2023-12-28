import React, { useState } from 'react';

const Traffic = () => {
	const [light, setLight] = useState(1);

	const handleChangeColor = () => {
		if (light === 3) {
			setLight(1);
		} else {
			setLight(light + 1);
		}
	};

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<div>
				<button onClick={handleChangeColor}>Next</button>
			</div>

			<div style={{ marginTop: 20, display: 'flex' }}>
				<div
					style={{
						width: 30,
						height: 30,
						border: '1px solid black',
						borderRadius: '30px',
						margin: 4,
						backgroundColor: light === 1 ? 'red' : '',
					}}
				></div>
				<div
					style={{
						width: 30,
						height: 30,
						border: '1px solid black',
						borderRadius: '30px',
						margin: 4,
						backgroundColor: light === 2 ? 'yellow' : '',
					}}
				></div>
				<div
					style={{
						width: 30,
						height: 30,
						border: '1px solid black',
						borderRadius: '30px',
						margin: 4,
						backgroundColor: light === 3 ? 'green' : '',
					}}
				></div>
			</div>
		</div>
	);
};

export default Traffic;
