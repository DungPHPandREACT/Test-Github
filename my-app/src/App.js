import './App.css';
import CardStudent from './CardStudent';
import PageProduct from './PageProduct';
import ProductItem from './ProductItem';
import Test1 from './Test1';
import Test2 from './Test2';

function App() {
	const age = 5;
	const name = 'Tiến';

	const logger = () => {
		console.log('Đây là hàm logger trong component app');
	};

	const textHelloWorld = <h1>Xin chào thế giới</h1>;

	// listStudent[0].name
	return (
		<>
			<div className='App'>
				{/* <CardStudent name='Dũng' />
				<CardStudent name='Nam' />
				<CardStudent age={17} />
				<CardStudent name='T'>
					<div>
						<h1>Hello</h1>
						<h1>Bye</h1>
					</div>
				</CardStudent> */}

				{/* {age >= 10 ? 'Tuổi lớn hơn hoặc bằng 10' : 'Tuổi nhỏ hơn 10'}
			<ProductItem isExistTag={true} />
			<ProductItem />
			<ProductItem />
			<CardStudent name={listStudent[0].name} age={listStudent[0].age} />
			<CardStudent name={listStudent[1].name} age={listStudent[1].age} />
			<CardStudent
				name={listStudent[2].name}
				age={listStudent[2].age}
			></CardStudent>
			<CardStudent name='Huy 4' list={listStudent} /> */}
				<PageProduct />
			</div>
			{/* <Test1 />
			<Test2 /> */}
		</>
	);
}

export default App;
