import { Routes, Route } from 'react-router-dom';
import LoginScreen from '../components/auth/LoginScreen';
import RegisterScreen from '../components/auth/RegisterScreen';
import NotFound from '../components/pinterestScreen/NotFound';

export const AuthRouter = () => {
	return (
		<>
			<Routes>
				<Route path='/login' element={<LoginScreen />} />

				<Route path='/register' element={<RegisterScreen />} />

				<Route path='/*' element={<NotFound />} />
			</Routes>
		</>
	);
};
