import AuthProvider from './context/authContext/AuthProvider';
import ModalProvider from './context/modalContext/ModalProvider';
import PicturesProvider from './context/picturesContext/PicturesProvider';
import { AppRouter } from './routes/AppRouter';

function App() {
	return (
		<>
			<AuthProvider>
				<PicturesProvider>
					<ModalProvider>
						<AppRouter />
					</ModalProvider>
				</PicturesProvider>
			</AuthProvider>
		</>
	);
}

export default App;
