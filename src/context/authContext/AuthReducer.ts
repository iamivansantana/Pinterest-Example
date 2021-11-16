import { iAuthState, iUsuario } from '../../interfaces/interfaces';

//Types
export type AuthAction =
	| { type: 'authLogIn'; payload: iUsuario }
	| { type: 'authLogOut' }
	| { type: 'authSetError'; payload: string }
	| { type: 'authRemoveError' }
	| { type: 'authStartLoading' }
	| { type: 'authFinishLoading' };

export const authReducer = (
	state: iAuthState,
	action: AuthAction
): iAuthState => {
	switch (action.type) {
		case 'authLogIn':
			return {
				...state,
				uid: action.payload.uid,
				name: action.payload.name,
			};
		case 'authLogOut':
			return {
				...state,
				uid: '',
				name: '',
			};
		case 'authSetError':
			return {
				...state,
				authState: { ...state.authState, msgError: action.payload },
			};
		case 'authRemoveError':
			return {
				...state,
				authState: { ...state.authState, msgError: null },
			};
		case 'authStartLoading':
			return {
				...state,
				authState: { ...state.authState, loading: true },
			};
		case 'authFinishLoading':
			return {
				...state,
				authState: { ...state.authState, loading: false },
			};

		default:
			return state;
	}
};
