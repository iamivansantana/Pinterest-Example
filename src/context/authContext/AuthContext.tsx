import { createContext } from 'react';
import { iAuthState } from '../../interfaces/interfaces';

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
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export default AuthContext;
