import { createContext } from 'react';
import { iPictureState } from '../../interfaces/interfaces';

//Definicion de typos de las props que son compartidas en el Provider
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
