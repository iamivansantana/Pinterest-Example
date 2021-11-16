//Auth Interfaces
export interface iAuthState {
	uid: string;
	name: string | null;
	authState: {
		loading: boolean;
		msgError: string | null;
	};
}
export interface iUsuario {
	uid: string;
	name: string | null;
}

//Pictures Interfaces

export interface iPictureState {
	busqueda: string;
	imagenes: never[];
}
