import { useReducer } from 'react';
import { iPictureState } from '../../interfaces/interfaces';
import { pictureReducer } from './PictureReducer';
import PicturesContext from './PicturesContext';

const INITIAL_STATE: iPictureState = {
	busqueda: 'pink',
	imagenes: [],
};

interface iProps {
	children: JSX.Element | JSX.Element[];
}

const PicturesProvider = ({ children }: iProps) => {
	const [pictureState, dispatch] = useReducer(pictureReducer, INITIAL_STATE);

	//Agregar Items
	const addItems = (newArray: never[]) => {
		dispatch({
			type: 'pictureAddItems',
			payload: newArray,
		});
	};
	//Limpiar Items State
	const cleanItems = () => {
		dispatch({
			type: 'pictureCleanItems',
		});
	};
	//Cambiar Busqueda
	const updateBusqueda = (newBusqueda: string) => {
		dispatch({
			type: 'pictureUpdateBusqueda',
			payload: newBusqueda,
		});
	};

	return (
		<PicturesContext.Provider
			value={{
				pictureState,
				addItems,
				cleanItems,
				updateBusqueda,
			}}
		>
			{children}
		</PicturesContext.Provider>
	);
};

export default PicturesProvider;
