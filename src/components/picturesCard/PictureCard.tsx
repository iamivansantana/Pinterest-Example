import './PictureCards.css';

const PictureCard = ({ numberClass }: any) => {
	// const height: string = '200px';
	return (
		<>
			<div className={`card-container grid-${numberClass}`}>
				<div className='card-picture'>
					<div className='image-picture'>
						<img src='assets\img\lyberty2.jpg' alt='example' />
					</div>
					<div className='shadow-picture flex flex-column flex flex-justify-between'>
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
