import React, { useEffect, useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(1);

	useEffect(() => {
		return () => {
			console.log('chạy vào return');
		};
	}, []);

	return (
		<div>
			<h1>Count: {count}</h1>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Change count
			</button>
		</div>
	);
};

export default Counter;
