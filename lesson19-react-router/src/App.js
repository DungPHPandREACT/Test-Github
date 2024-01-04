import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './layouts/Footer/Footer';
import Header from './layouts/Header/Header';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import Products from './pages/Admin/Products/Products';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import About from './pages/Store/About/About';
import BlogDetail from './pages/Store/BlogDetail/BlogDetail';
import Blogs from './pages/Store/Blogs/Blogs';
import Cart from './pages/Store/Cart/Cart';
import Collections from './pages/Store/Collections/Collections';
import Homepage from './pages/Store/Homepage/Homepage';
import NotFound from './pages/Store/NotFound/NotFound';
import ProductDetail from './pages/Store/ProductDetail/ProductDetail';

const App = () => {
	return (
		<div>
			<Header />
			<Routes>
				<Route path='/admin'>
					<Route path='' element={<Dashboard />} />
					{/* <PrivateRoute path='' element={<Dashboard />} /> */}
					<Route path='products' element={<Products />} />
					{/* <PrivateRoute path='products' element={<Products />} /> */}
				</Route>

				<Route path='/' element={<Homepage />}></Route>
				<Route path='/colection/:idCollection' element={<Collections />} />
				<Route path='/about' element={<About />} />
				<Route path='/blogs/:handle' element={<Blogs />} />
				<Route path='/blogs/:handle/:slug' element={<BlogDetail />} />
				<Route path='/prodduct/slug' element={<ProductDetail />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
