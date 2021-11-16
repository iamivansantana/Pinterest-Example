import { createContext } from 'react';

export type ModalContextProps = {
	isOpen: boolean;
	setIsOpen: any;
	imagenModal: any;
	setImagenModal: any;
};

const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);

export default ModalContext;
