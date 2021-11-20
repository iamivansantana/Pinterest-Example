import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/authContext/AuthContext';

export const PrivateRoute = ({ children }) => {
	const { authState } = useContext(AuthContext);

	const isAutenticated = authState.uid;
	return isAutenticated ? children : <Navigate to='/auth/login' />;
};
