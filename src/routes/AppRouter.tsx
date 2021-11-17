import { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from '@firebase/auth';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { AuthRouter } from './AuthRouter';
import PinterestScreen from '../components/pinterestScreen/PinterestScreen';
import AuthContext from '../context/authContext/AuthContext';

export const AppRouter = () => {
	const { login } = useContext(AuthContext);
	const [checking, setChecking] = useState(true);

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	//Efecto para regresar el usuario autenticado
	useEffect(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user?.uid) {
				login(user.uid, user.displayName);
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}
			setChecking(false);
		});
		// eslint-disable-next-line
	}, []);

	if (checking) {
		return <h1>Espere...</h1>;
	}

	return (
		<Router>
			<div>
				<Switch>
					<PublicRoute
						isAuthenticated={isLoggedIn}
						path='/auth'
						component={AuthRouter}
					/>

					<PrivateRoute
						isAuthenticated={isLoggedIn}
						exact
						path='/'
						component={PinterestScreen}
					/>

					<Redirect to='/auth/login' />
				</Switch>
			</div>
		</Router>
	);
};
