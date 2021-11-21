import { ReactChild, ReactChildren, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/authContext/AuthContext';

interface iChildren {
	children: ReactChild | ReactChildren;
}

export const PrivateRoute = ({ children }: iChildren) => {
	//Senecesita un state que indique si el usuario está autenticado o no
	const { authState } = useContext(AuthContext);

	const isAutenticated = authState.uid;
	return isAutenticated ? <>{children}</> : <Navigate to='/auth/login' />;
};
