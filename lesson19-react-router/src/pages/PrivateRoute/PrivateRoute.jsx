import React from 'react';
import { Route, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ path, element }) => {
	const navigate = useNavigate();
	const role = 'admin';

	if (role !== 'admin') {
		navigate('/');

		return <>{element}</>;
	}
	return <Route path={path} element={element} />;
};

export default PrivateRoute;
