import { ReactChild, ReactChildren, ReactElement, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { JsxElement } from 'typescript';
import AuthContext from '../context/authContext/AuthContext';

interface iChildren {
	children: ReactChild | ReactChildren | JSX.Element[] | JSX.Element;
}

export const PrivateRoute = ({
	children,
}: iChildren): ReactElement<JsxElement> => {
	//Senecesita un state que indique si el usuario está autenticado o no
	const { authState } = useContext(AuthContext);

	const isAutenticated = authState.uid;
	return isAutenticated ? <>{children}</> : <Navigate to='/auth/login' />;
};
