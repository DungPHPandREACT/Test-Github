import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
	const params = useParams();
	console.log('params', params);

	return <h1>BlogDetail</h1>;
};

export default BlogDetail;
