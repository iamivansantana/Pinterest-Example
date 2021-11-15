import React, { Suspense } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import LoginScreen from '../components/auth/LoginScreen';
import RegisterScreen from '../components/auth/RegisterScreen';
import PinterestScreen from '../components/pinterestScreen/PinterestScreen';

const AppRoutes = () => {
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<Router>
					<Switch>
						{/* auth */}
						<Route exact path='/login' component={LoginScreen} />
						<Route exact path='/register' component={RegisterScreen} />

						<Route exact path='/' component={PinterestScreen} />
						<Redirect to='/' />
					</Switch>
				</Router>
			</Suspense>
		</>
	);
};

export default AppRoutes;
