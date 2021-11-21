import { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from '@firebase/auth';

import { PublicRoute } from './PublicRoute';
import { AuthRouter } from './AuthRouter';
import PinterestScreen from '../components/pinterestScreen/PinterestScreen';
import AuthContext from '../context/authContext/AuthContext';
import NotFound from '../components/pinterestScreen/NotFound';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
	const { login, startLogOut } = useContext(AuthContext);
	const [checking, setChecking] = useState<boolean>(true);

	// Efecto para regresar el usuario autenticado
	useEffect(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user?.uid) {
				login(user.uid, user.displayName);
			} else {
				startLogOut();
			}
			setChecking(false);
		});
		// eslint-disable-next-line
	}, []);

	if (checking) {
		return <h1>Espere...</h1>;
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/auth/*'
					element={
						<PublicRoute>
							<AuthRouter />
						</PublicRoute>
					}
				/>
				<Route
					path='/'
					element={
						<PrivateRoute>
							<PinterestScreen />
						</PrivateRoute>
					}
				/>
				<Route path='/*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};
