import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
	const cssInline = {
		margin: '8px',
	};
	return (
		<div>
			<h1>Header</h1>
			
			<NavLink style={cssInline} to='/colection/handle'>
				Collections
			</NavLink>
			<NavLink style={cssInline} to='/about'>
				About
			</NavLink>

			<NavLink style={cssInline} to='/blogs/handle'>
				Blogs
			</NavLink>
			<NavLink style={cssInline} to='/prodduct/slug'>
				Product detail
			</NavLink>
			<NavLink style={cssInline} to='/cart'>
				Cart
			</NavLink>
		</div>
	);
};

export default Header;
