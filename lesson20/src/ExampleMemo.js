import React, { useCallback, useMemo, useState } from 'react';
import RenderName from './RenderName';
import RenderAge from './RenderAge';

const ExampleMemo = () => {
	const [name, setName] = useState('Huy');
	const [age, setAge] = useState(18);
	const [gender, setGender] = useState('boy');
	const [rank, setRank] = useState(100);

	const handleChangeName = () => {
		setName('Quốc Khánh');
	};

	const handleChangeAge = () => {
		setAge(age + 1);
	};

	const handlePrintNameAndAge = useCallback(() => {
		console.log('Tên là: ', name);
		console.log('Tuổi là: ', age);
	}, [name, age]);

	const handleChangeRank = () => {
		setRank(rank + 100);
	};

	console.log('rank: ', rank);

	const renderRank = useMemo(() => {
		return <h1>Rank: {rank}</h1>;
	}, []);

	// const renderRank = <h1>Rank: {rank}</h1>

	// const handlePrintNameAndAge = () => {
	// 	console.log('Tên là: ', name);
	// 	console.log('Tuổi là: ', age);
	// };

	return (
		<div>
			<RenderName name={name} />
			<button onClick={handleChangeName}>Thay đổi tên</button>
			<RenderAge age={age} />
			<button onClick={handleChangeAge}>Thay đổi tuổi</button>

			<button onClick={handlePrintNameAndAge}>In ra tên và tuổi</button>
			{renderRank}
			<button onClick={handleChangeRank}>Thay đổi tuổi</button>
		</div>
	);
};

export default ExampleMemo;
