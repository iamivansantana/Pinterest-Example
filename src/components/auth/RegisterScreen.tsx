import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import './auth.css';
import AuthContext from '../../context/authContext/AuthContext';
import { useContext } from 'react';

const RegisterScreen = () => {
	//Acceso al context
	const {
		authState,
		setError,
		removeError,
		startRegisterWithEmailPasswordName,
		startGoogleLogin,
	} = useContext(AuthContext);

	//Desestructuracion del mensaje de error
	const { msgError } = authState.authState;

	//Interface de Registro de Usuario
	interface iRegisterUser {
		name: string;
		email: string;
		password: string;
	}
	//objeto usuario
	const ivan: iRegisterUser = {
		name: '',
		email: '',
		password: '',
	};

	//Utilizacion de hook useForm para manejo de campos en el formulario
	const [formValues, handleInputChange] = useForm(ivan);
	//Desestructuracion de propiedades
	const { name, email, password } = formValues;

	//Submit del Formulario
	const handleRegister = (e: any) => {
		e.preventDefault();

		if (isFormValid()) {
			startRegisterWithEmailPasswordName(email, password, name);
		}
	};

	//Validacion del formulario con Validator
	const isFormValid = (): boolean => {
		if (name.trim().length === 0) {
			setError('Name is Required');
			return false;
		} else if (!validator.isEmail(email)) {
			setError('Email is not valid');
			return false;
		} else if (password.length < 6) {
			setError('Password should be at least 6 characters');
			return false;
		}

		removeError();
		return true;
	};

	//Login con Google
	const handleGoogleLogin = (e: any): void => {
		e.preventDefault();
		startGoogleLogin();
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
										className='text-head text-bold '
										style={{ textAlign: 'center', color: 'var(--textColorSecondary)' }}
									>
										Create Account
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
												alt='google-icon'
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
										<p>or use your email for registration:</p>
									</div>

									<form onSubmit={handleRegister} style={{ width: '60%' }}>
										<div className='flex flex-column'>
											{/* {msgError && <div className='auth__alert-error'>{msgError}</div>} */}
											<input
												type='text'
												placeholder='Name'
												name='name'
												value={name}
												className='auth-input'
												autoComplete='off'
												onChange={handleInputChange}
											/>

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
											<div>
												<input type='checkbox' />
												<label>
													I agree to the{' '}
													<span style={{ color: 'var(--textColorSecondary)' }}>Terms</span>{' '}
													and{' '}
													<span style={{ color: 'var(--textColorSecondary)' }}>
														Privacy Policy
													</span>
												</label>
											</div>
											{msgError && (
												<div className='auth-alert-error'>{`¡${msgError}!`}</div>
											)}

											<div
												className='flex flex-center'
												style={{ width: '100%', marginLeft: '5px' }}
											>
												<button className='btn-auth btn-auth1' type='submit'>
													Sign Up
												</button>

												<Link className='btn-auth btn-auth2' to='/auth/login'>
													Sign In
												</Link>
											</div>
										</div>
									</form>
								</div>
								<div className='grid-area-Img'>
									<img
										className='img-cover'
										src='\assets\img\ImgLoginAndRegister.webp'
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

export default RegisterScreen;
