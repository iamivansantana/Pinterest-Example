import { useReducer } from 'react';
import { iAuthState } from '../../interfaces/interfaces';
import AuthContext from './AuthContext';
import { authReducer } from './AuthReducer';

import { googleAuthProvider } from '../../firebase/firebaseConfig';
import {
	getAuth,
	signInWithPopup,
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
	signOut,
} from '@firebase/auth';
import Swal from 'sweetalert2';

//Estado inicial
const INITIAL_STATE: iAuthState = {
	uid: '',
	name: '',
	authState: {
		loading: false,
		msgError: null,
	},
};

//Definicion de interface para children
interface iProps {
	children: JSX.Element | JSX.Element[];
}

const AuthProvider = ({ children }: iProps) => {
	//useReducer
	const [authState, dispatch] = useReducer(authReducer, INITIAL_STATE);

	//Login con Email y password
	const startLoginEmailPassword = (email: string, password: string) => {
		startLoading();

		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				login(user.uid, user.displayName);
				finishLoading();
			})
			.catch((error) => {
				console.log(error);
				finishLoading();
				Swal.fire('Error', error.message, 'error');
			});
	};
	const startLoading = () => {
		dispatch({
			type: 'authStartLoading',
		});
	};
	const finishLoading = () => {
		dispatch({
			type: 'authFinishLoading',
		});
	};

	//Registro de nuevo usuario con Email Password y Nombre
	const startRegisterWithEmailPasswordName = (
		email: string,
		password: string,
		name: string
	): void => {
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
			.then(async ({ user }) => {
				await updateProfile(user, { displayName: name });
				login(user.uid, user.displayName);
			})
			.catch((error) => {
				// console.log(error);
				Swal.fire('Error', error.message, 'error');
			});
	};

	//Login Con google
	const startGoogleLogin = (): void => {
		const auth = getAuth();
		signInWithPopup(auth, googleAuthProvider)
			.then((result) => {
				// The signed-in user info.
				const user = result.user;
				login(user.uid, user.displayName);
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;

				console.log(errorCode, '++++', errorMessage);
			});
	};
	//Login Dispatch
	const login = (uid: string, name: string | null): void => {
		dispatch({ type: 'authLogIn', payload: { uid, name } });
	};
	//LogOut Firebase
	const startLogOut = async () => {
		const auth = getAuth();
		await signOut(auth);

		logOut();
	};
	//LogOut
	const logOut = () => {
		dispatch({ type: 'authLogOut' });
	};

	//Mensaje de Error
	const setError = (msgError: string) => {
		dispatch({
			type: 'authSetError',
			payload: msgError,
		});
	};
	//Remover Mensaje de error
	const removeError = () => {
		dispatch({
			type: 'authRemoveError',
		});
	};

	return (
		<AuthContext.Provider
			value={{
				authState,
				startGoogleLogin,
				setError,
				removeError,
				startRegisterWithEmailPasswordName,
				startLoginEmailPassword,
				login,
				startLogOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
