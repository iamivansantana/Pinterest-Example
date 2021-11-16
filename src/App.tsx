import AuthProvider from './context/authContext/AuthProvider';
import PicturesProvider from './context/picturesContext/PicturesProvider';
import { AppRouter } from './routes/AppRouter.js';

function App() {
	return (
		<>
			<AuthProvider>
				<PicturesProvider>
					<AppRouter />
				</PicturesProvider>
			</AuthProvider>
		</>
	);
}

export default App;
