import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';

const PageLayout = (props) => {
	return (
		<>
			<Navigation />
			<Header />
			{/* content page */}
			{props.children}
			<Footer />
		</>
	);
};

export default PageLayout;
