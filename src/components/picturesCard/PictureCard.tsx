import { useContext } from 'react';
import ModalContext from '../../context/modalContext/ModalContext';
import './PictureCards.css';

const PictureCard = ({ imagen, numberClass }: any) => {
	//Acceso al Context
	const { setIsOpen, setImagenModal } = useContext(ModalContext);
	//Desestructuracion de elementos a prop imagen.
	const { webformatURL, largeImageURL, tags } = imagen;

	//Funcion para abrir Ventana Modal.
	const modaClick = () => {
		//Abre Modal
		setIsOpen(true);
		//pasa informacion de la imagen al state imagenModal en modalState.
		setImagenModal({ largeImageURL: largeImageURL, tags: tags });
	};

	return (
		<>
			<div className={`card-container grid-${numberClass}`}>
				<div className='card-picture'>
					<div className='image-picture'>
						<img src={webformatURL} alt={tags} loading='lazy' />
					</div>
					<div
						className='shadow-picture flex flex-column flex flex-justify-between'
						onClick={modaClick}
					>
						<div className='btns-shadow-picture flex-justify-right'>
							<div className='btn-card flex flex-center'>
								<img width='20px' src='assets\icons\icon-love.svg' alt='save-btn' />
							</div>
						</div>
						<div className='btns-shadow-picture flex-justify-center'>
							<div className='btn-card flex flex-center'>
								<img width='20px' src='assets\icons\btn-x.svg' alt='save-btn' />
							</div>
							<div className='btn-card flex flex-center'>
								<img width='20px' src='assets\icons\btn-ir.svg' alt='save-btn' />
							</div>
							<div className='btn-card flex flex-center'>●●●</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PictureCard;
