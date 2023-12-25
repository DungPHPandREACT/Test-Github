import './PageProduct.css';
import Product from './Product';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Navigation from './layouts/Navigation';
import PageLayout from './layouts/PageLayout';

const PageProduct = () => {
	const listProducts = [
		{
			title: 'Fancy Product',
			isShowTagSale: false,
			isShowRate: false,
			price1: '40.000',
			pric2: '80.000',
			type: 'type1',
		},
		{
			title: 'Special Item',
			isShowTagSale: true,
			isShowRate: true,
			price1: '20.00',
			price2: '18.00',
			type: 'type2',
		},
		{
			title: 'Sale Item',
			isShowTagSale: true,
			isShowRate: false,
			price1: '50.00',
			price2: '25.00',
			type: 'type2',
		},
		{
			title: 'Popular Item',
			isShowTagSale: false,
			isShowRate: true,
			price1: '40.000',
			type: 'type3',
		},
		{
			title: 'Sale Item',
			isShowTagSale: true,
			isShowRate: false,
			price1: '50.00',
			price2: '25.00',
			type: 'type2',
		},
		{
			title: 'Fancy Product',
			isShowTagSale: false,
			isShowRate: false,
			price1: '120.00',
			price2: '280.00',
			type: 'type1',
		},
		{
			title: 'Special Item',
			isShowTagSale: true,
			isShowRate: true,
			price1: '20.00',
			price2: '18.00',
			type: 'type2',
		},
		{
			title: 'Popular Item',
			isShowTagSale: false,
			isShowRate: true,
			price1: '40.000',
			type: 'type3',
		},
	];

	const jsxListProducts = listProducts.map((product, index) => {
		return (
			<Product
				title={product.title}
				isShowTagSale={product.isShowTagSale}
				isShowRate={product.isShowRate}
				price1={product.price1}
				price2={product.price2}
				type={product.type}
			/>
		);
	});

	return (
		<PageLayout>
			<section className='py-5'>
				<div className='container px-4 px-lg-5 mt-5'>
					<div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
						{jsxListProducts}
					</div>
				</div>
			</section>
		</PageLayout>
	);
};

export default PageProduct;
