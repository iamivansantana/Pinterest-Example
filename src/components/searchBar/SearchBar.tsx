import { useContext } from 'react';
import PicturesContext from '../../context/picturesContext/PicturesContext';
import { useForm } from '../../hooks/useForm';
import './SearchBar.css';

const SearchBar = () => {
	//Acceso al Context
	const { updateBusqueda, cleanItems, pictureState } =
		useContext(PicturesContext);
	const { busqueda } = pictureState;

	//objeto usuario
	const search: {} = {
		busquedaBar: '',
	};

	//Utilizacion de hook useForm para manejo de campos en el formulario
	const [formValues, handleInputChange] = useForm(search);
	//Desestructuracion de propiedades
	const { busquedaBar } = formValues;

	const handleSearch = (e: any) => {
		e.preventDefault();
		if (!busquedaBar) return;

		//Si busqueda del searchBar es igual ala busqueda  Return para evitar volver a cargar los mismos elementos
		if (busquedaBar === busqueda) return;

		//Borra los Items guardados
		cleanItems();
		//Actualiza el state de Busqueda
		updateBusqueda(busquedaBar);
	};

	return (
		<>
			<div className='content-searchBar'>
				<form onSubmit={handleSearch} style={{ width: '100%' }}>
					<input
						className='input-searchBar'
						type='text'
						placeholder='Search'
						name='busquedaBar'
						value={busquedaBar}
						autoComplete='off'
						onChange={handleInputChange}
					/>
					<button className='btn-seachBar' type='submit'>
						<img width='15px' src='assets\icons\btn-ir.svg' alt='btn-Ir' />
					</button>
				</form>
			</div>
		</>
	);
};

export default SearchBar;
