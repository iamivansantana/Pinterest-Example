import { createContext } from 'react';
import { iPictureState } from '../../interfaces/interfaces';

export type PicturesContextProps = {
	pictureState: iPictureState;
	addItems: (newArray: never[]) => void;
	cleanItems: () => void;
	updateBusqueda: (newBusqueda: string) => void;
};

const PicturesContext = createContext<PicturesContextProps>(
	{} as PicturesContextProps
);

export default PicturesContext;
