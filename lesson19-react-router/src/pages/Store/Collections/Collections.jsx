import React from 'react';
import {
	NavLink,
	useNavigate,
	useParams,
	useSearchParams,
} from 'react-router-dom';

const Collections = () => {
	const params = useParams();
	const [searchParams, setSearchParams] = useSearchParams();

	const navigate = useNavigate();

	console.log('params: ', params);
	console.log('queryString: ', searchParams.get('page'));

	const handleChangePage = (number) => {
		setSearchParams({ page: number });
	};

	const goHomepage = () => {
		// setTimeout(() => {
		// 	navigate(-1);
		// }, 2000);
		navigate(-1);
	};

	const redirect = () => {
		navigate('/about');
	};

	return (
		<div>
			<h1>Collections</h1>
			<div onClick={redirect}>Sang trang about</div>
			<button onClick={() => handleChangePage(1)}>1</button>
			<button onClick={() => handleChangePage(2)}>2</button>
			<button onClick={() => handleChangePage(3)}>3</button>
			{goHomepage}
			<button onClick={goHomepage}>Quay về trang chủ</button>
		</div>
	);
};

export default Collections;
