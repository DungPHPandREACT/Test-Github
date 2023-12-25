import './PageProduct.css';
import Product from './Product';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Navigation from './layouts/Navigation';
import PageLayout from './layouts/PageLayout';

const PageProduct = () => {
	return (
		<PageLayout>
			<section className='py-5'>
				<div className='container px-4 px-lg-5 mt-5'>
					<div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
						<Product
							title='Fancy Product'
							isShowTagSale={false}
							isShowRate={false}
							textButton='View options'
							price1='40.00'
							price2='80.00'
							type='type1'
						/>
						<Product
							title='Special Item'
							isShowTagSale={true}
							isShowRate={true}
							textButton='Add to cart'
							price1='20.00'
							price2='18.00'
							type='type2'
						/>
						<Product
							title='Sale Item'
							isShowTagSale={true}
							isShowRate={false}
							textButton='Add to cart'
							price1='50.00'
							price2='25.00'
							type='type2'
						/>
						<Product
							title='Popular Item'
							isShowTagSale={false}
							isShowRate={true}
							textButton='Add to cart'
							price1='40.000'
							type='type3'
						/>
						<Product
							title='Sale Item'
							isShowTagSale={true}
							isShowRate={false}
							textButton='Add to cart'
							price1='50.00'
							price2='25.00'
							type='type2'
						/>
						<Product
							title='Fancy Product'
							isShowTagSale={false}
							isShowRate={false}
							textButton='View options'
							price1='120.00'
							price2='280.00'
							type='type1'
						/>
						<Product
							title='Special Item'
							isShowTagSale={true}
							isShowRate={true}
							textButton='Add to cart'
							price1='20.00'
							price2='18.00'
							type='type2'
						/>
						<Product
							title='Popular Item'
							isShowTagSale={false}
							isShowRate={true}
							textButton='Add to cart'
							price1='40.000'
							type='type3'
						/>
					</div>
				</div>
			</section>
		</PageLayout>
	);
};

export default PageProduct;
