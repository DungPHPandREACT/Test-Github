import React, { useEffect, useState } from 'react';
import Counter from './Counter';
import ExampleMemo from './ExampleMemo';

const App = () => {
	// const [count1, setCount1] = useState(1);
	// const [count2, setCount2] = useState(1);
	// const [count3, setCount3] = useState(1);

	// // useEffect(callback, dependencies);
	// // dependencies là 1 mảng rỗng ([])
	// // useEffect chạy 1 lần, sau lần render đầu tiên
	// useEffect(() => {
	// 	console.log('dependencies là 1 mảng rỗng []');
	// }, []);

	// // dependencies không truyền gì
	// // sau mỗi lần render, useEffect này sẽ đều được chạy lại
	// useEffect(() => {
	// 	console.log('dependencies không truyền gì');
	// });

	// // dependencies là 1 mảng có chứa các phần tử [dependency1,... dependencyN]
	// // sau mỗi lần count1 hoặc count2 thay đổi (tức là dependency trong mảng thay đổi) thì useEffect sẽ được chạy lại
	// useEffect(() => {
	// 	setCount3(count3 + 1);
	// 	console.log('dependencies là 1 mảng có chứa các phần tử');
	// }, [count1, count2]);

	// const [listStudent, setListStudent] = useState([]);
	// const [isLoading, setIsLoading] = useState(true);

	// useEffect(() => {
	//   console.log('chạy vào useEffect')

	// 	fetch('https://657b0c32394ca9e4af137d9d.mockapi.io/api/v1/students')
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setListStudent(data);
	// 			setIsLoading(false);
	// 		});

	// 	return () => {
	// 		console.log('chạy vào return');
	// 	};
	// }, []);

	// console.log('listStudent: ', listStudent);

	const [showComponent, setShowComponent] = useState(true);

	return (
		<div>
			{/* <h1>Count1: {count1}</h1>
			<button
				onClick={() => {
					setCount1(count1 + 1);
				}}
			>
				Change count1
			</button>

			<h1>Count2: {count2}</h1>
			<button
				onClick={() => {
					setCount2(count2 + 1);
				}}
			>
				Change count2
			</button>

			<h1>Count3: {count3}</h1> */}

			{/* <h1 id='heading'>Đây là heading h1</h1> */}
			{/* <h1 id='heading'>Tiêu đề bài viết</h1> */}

			{/* {isLoading ? (
				<h1>Loading...</h1>
			) : (
				listStudent.map((student) => <h1>{student.name}</h1>)
			)} */}

			{/* <button onClick={() => setShowComponent(!showComponent)}>
				Change status component
			</button>
			{showComponent ? <Counter /> : ''} */}

			<ExampleMemo />
		</div>
	);
};

export default App;
