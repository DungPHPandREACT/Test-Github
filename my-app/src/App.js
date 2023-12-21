import './App.css';
import CardStudent from './CardStudent';
import PageProduct from './PageProduct';
import ProductItem from './ProductItem';

function App() {
	const age = 5;

	// listStudent[0].name
	return (
		<div className='App'>
			{age >= 10 ? 'Tuổi lớn hơn hoặc bằng 10' : 'Tuổi nhỏ hơn 10'}
			<ProductItem isExistTag={true} />
			<ProductItem />
			<ProductItem />
			{/* <CardStudent name={listStudent[0].name} age={listStudent[0].age} />
			<CardStudent name={listStudent[1].name} age={listStudent[1].age} />
			<CardStudent
				name={listStudent[2].name}
				age={listStudent[2].age}
			></CardStudent>
			<CardStudent name='Huy 4' list={listStudent} /> */}
			{/* <PageProduct /> */}
		</div>
	);
}

export default App;
