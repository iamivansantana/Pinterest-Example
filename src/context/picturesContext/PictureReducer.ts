import { iPictureState } from '../../interfaces/interfaces';

//Types
export type PicturesAction =
	| { type: 'pictureUpdateBusqueda'; payload: string }
	| { type: 'pictureCleanItems' }
	| { type: 'pictureAddItems'; payload: never[] };

export const pictureReducer = (
	state: iPictureState,
	action: PicturesAction
): iPictureState => {
	switch (action.type) {
		case 'pictureAddItems':
			return {
				...state,
				imagenes: action.payload,
			};
		case 'pictureCleanItems':
			return {
				...state,
				imagenes: [],
			};
		case 'pictureUpdateBusqueda':
			return {
				...state,
				busqueda: action.payload,
			};
		default:
			return state;
	}
};
