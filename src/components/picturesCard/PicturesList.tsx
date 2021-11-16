import PictureCard from './PictureCard';
import './PictureCards.css';

const PicturesList = ({ imagenes }: any) => {
	let contador: number = 0;
	return (
		<>
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
