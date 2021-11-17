import { createContext } from 'react';
import { iAuthState } from '../../interfaces/interfaces';

//Se definen el tipo de las props que se comparten en el AuthProvider
export type AuthContextProps = {
	authState: iAuthState;
	startGoogleLogin: () => void;
	setError: (msgError: string) => void;
	removeError: () => void;
	startRegisterWithEmailPasswordName: (
		email: string,
		password: string,
		name: string
	) => void;
	startLoginEmailPassword: (email: string, password: string) => void;
	login: (uid: string, name: string | null) => void;
	startLogOut: () => void;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export default AuthContext;
