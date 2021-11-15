import React from 'react';
import PictureCard from './PictureCard';
import './PictureCards.css';

const PicturesList = () => {
	const arrayExample: string[] = [
		'uno',
		'dos',
		'tres',
		'cuatro',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'17',
		'18',
		'19',
	];
	let contador: number = 0;
	return (
		<>
			<div className='picturesCard-container'>
				{arrayExample.map((i) => {
					contador++;
					if (contador === 7) contador = 1;

					return <PictureCard key={i} numberClass={contador} />;
				})}
			</div>
		</>
	);
};

export default PicturesList;
