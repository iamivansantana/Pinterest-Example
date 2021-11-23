import PictureCard from './PictureCard';
import './PictureCards.css';

const PicturesList = ({ imagenes }: any) => {
	//Se inicializa contador que sirve para asignar las clases de posicionamiento en el Grid
	let contador: number = 0;
	return (
		<>
			<button
				onClick={() => {
					window.scrollTo(0, 0);
				}}
				className='btn-up'
				type='button'
			>
				<span className='flex flex-center'>Go Up</span>
			</button>
			<div className='picturesCard-container'>
				{imagenes.map((imagen: any, i: any) => {
					contador++;
					if (contador === 7) contador = 1;

					return (
						<PictureCard key={imagen.id + i} imagen={imagen} numberClass={contador} />
					);
				})}
			</div>
		</>
	);
};

export default PicturesList;
