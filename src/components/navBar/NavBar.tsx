import React, { useContext } from 'react';
import AuthContext from '../../context/authContext/AuthContext';
import './NavBar.css';

const NavBar = () => {
	const { startLogOut } = useContext(AuthContext);

	return (
		<>
			<div className='icons-container'>
				<div className='icon-pinterest' style={{ marginBottom: '3rem' }}>
					<img
						width='50px'
						src='assets\icons\icon-pinterest.svg'
						alt='pinterest-icon'
					/>
				</div>
				<div className='btn-navBar btn-navBarWhite'>
					<img width='20px' src='assets\icons\icon-person.svg' alt='person-icon' />
				</div>
				<div className='btn-navBar btn-navBarWhite'>
					<img width='20px' src='assets\icons\icon-campana.svg' alt='campana-icon' />
				</div>
				<div
					className='btn-navBar btn-navBarWhite'
					style={{ marginBottom: '3rem' }}
				>
					<img width='20px' src='assets\icons\icon-chat.svg' alt='chat-icon' />
				</div>
				<div
					className='btn-navBar btn-navBarBlack'
					style={{ marginBottom: '3rem' }}
				>
					<img width='20px' src='assets\icons\icon-love.svg' alt='love-icon' />
				</div>
				<div className='btn-navBar btn-navBarWhite'>
					<img
						width='20px'
						src='assets\icons\icon-question.svg'
						alt='question-icon'
					/>
				</div>
				<button
					className='btn-navBar btn-navBarWhite'
					onClick={() => startLogOut()}
				>
					<img width='25px' src='assets\icons\icon-leave.svg' alt='leave-icon' />
				</button>
			</div>
		</>
	);
};

export default NavBar;
