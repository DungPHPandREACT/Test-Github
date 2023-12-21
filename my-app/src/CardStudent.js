const CardStudent = (properties) => {
	console.log('list: ', properties.list);

	const cssInline = {
		color: 'red',
		fontSize: '14px',
	};
	return (
		<div className='card'>
			<h1
				style={{
					color: 'red',
					fontSize: '14px',
				}}
			>
				Username: {properties.name}
			</h1>
			<h1>Age: {properties.age}</h1>
			<h1>Gender: </h1>
		</div>
	);
};

export default CardStudent;
