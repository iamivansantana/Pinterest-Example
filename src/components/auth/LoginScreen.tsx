import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/authContext/AuthContext';
import { useForm } from '../../hooks/useForm';
import './auth.css';

const LoginScreen = () => {
	const { authState, startGoogleLogin, startLoginEmailPassword } =
		useContext(AuthContext);

	const { loading } = authState.authState;

	//Interface de Usuario
	interface iUser {
		email: string;
		password: string;
	}
	//objeto usuario
	const ivan: iUser = {
		email: 'ivan@gmail.com',
		password: 'password',
	};

	//Utilizacion de hook useForm para manejo de campos en el formulario
	const [formValues, handleInputChange] = useForm(ivan);
	//Desestructuracion de propiedades
	const { email, password } = formValues;

	//Login con Google
	const handleGoogleLogin = (e: any): void => {
		e.preventDefault();
		startGoogleLogin();
	};

	//Login con Email y Password
	const handleLogin = (e: any): void => {
		e.preventDefault();
		startLoginEmailPassword(email, password);
		console.log(loading);
	};

	return (
		<>
			<div className='body'>
				<div className='containerProject'>
					<div className='flex flex-center'>
						<div className='container-auth'>
							<div className='auth-grid'>
								<div className='grid-area-From flex flex-center flex-column'>
									<h1
										className='text-head text-bold'
										style={{ textAlign: 'center', color: 'var(--textColorSecondary)' }}
									>
										Login.
									</h1>
									<div>
										<button
											type='button'
											onClick={handleGoogleLogin}
											style={{ border: 'none', backgroundColor: 'transparent' }}
										>
											<img
												className='media-icon'
												src='\assets\icons\gg.svg'
												alt='google-icone'
											/>
										</button>
										<img
											className='media-icon'
											src='\assets\icons\fb.svg'
											alt='facebook-icon'
										/>
										<img
											className='media-icon'
											src='\assets\icons\tw.svg'
											alt='twitter-icon'
										/>
										<img
											className='media-icon'
											src='\assets\icons\vk.svg'
											alt='vk-icon'
										/>
									</div>
									<div>
										<p>or use your email to enter:</p>
									</div>

									<form onSubmit={handleLogin} style={{ width: '60%' }}>
										<div className='flex flex-column'>
											{/* {msgError && <div className='auth__alert-error'>{msgError}</div>} */}

											<input
												type='text'
												placeholder='Email'
												name='email'
												value={email}
												className='auth-input'
												autoComplete='off'
												onChange={handleInputChange}
											/>

											<input
												type='password'
												placeholder='Password'
												name='password'
												value={password}
												className='auth-input'
												onChange={handleInputChange}
											/>

											<div
												className='flex flex-center'
												style={{ width: '100%', marginLeft: '5px' }}
											>
												<button
													className='btn-auth btn-auth1'
													type='submit'
													disabled={loading}
												>
													Sign In
												</button>

												<Link className='btn-auth btn-auth2' to='/auth/register'>
													Sign Up
												</Link>
											</div>
										</div>
									</form>
								</div>
								<div className='grid-area-Img'>
									<img
										className='img-cover'
										src='\assets\img\ImgLogin.webp'
										alt='portada-img'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginScreen;
