import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Example from './Example';
import Traffic from './Traffic';

function App() {
	// let number = 0;
	// const handleClick = () => {
	// 	console.log('Hello');
	// };

	// const logger = (name) => {
	// 	console.log('Xin chào: ', name);
	// };

	// const handleChangeInput = () => {
	// 	console.log('Sự kiện on change input');
	// };

	// const handleIncrement = () => {
	// 	number += 1;
	// 	console.log('number: ', number);
	// };

	// let [number, setNumber] = useState(0); //arr
	// let number = useState(90)[0]; //arr1 => arr1[0]
	// let setNumber = useState(90)[1]; //arr2 => arr2[1]

	// const handleIncrement = () => {
	// 	setNumber(number + 1);
	// };

	// const handleDecrement = () => {
	// 	setNumber(number - 1);
	// };

	// console.log('render');

	return (
		<div className='app'>
			{/* <h1 onClick={handleClick}>Test event onclick</h1>
			<button
				onClick={() => {
					logger('Dũng');
				}}
			>
				Logger
			</button>

			<input onChange={handleChangeInput} onClick={handleClick} />

			<button onClick={handleIncrement}>Increment</button> */}

			{/* <button onClick={handleIncrement}>Increment</button>
			<h1>Number: {number}</h1>
			<button onClick={handleDecrement}>Decrement</button> */}

			{/* <Example /> */}

			<Traffic />
		</div>
	);
}

export default App;
