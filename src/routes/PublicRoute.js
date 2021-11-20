import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/authContext/AuthContext';

export const PublicRoute = ({ children }) => {
	const { authState } = useContext(AuthContext);

	const isAutenticated = authState.uid;
	return isAutenticated ? <Navigate to='/' /> : children;
};
