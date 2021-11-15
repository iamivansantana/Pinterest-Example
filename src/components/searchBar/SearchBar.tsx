import { useForm } from '../../hooks/useForm';
import './SearchBar.css';

const SearchBar = () => {
	//objeto usuario
	const search: {} = {
		busqueda: '',
	};

	//Utilizacion de hook useForm para manejo de campos en el formulario
	const [formValues, handleInputChange] = useForm(search);
	//Desestructuracion de propiedades
	const { busqueda } = formValues;

	const handleSearch = (e: any) => {
		e.preventDefault();
		if (!busqueda) return;

		console.log(busqueda);
	};

	return (
		<>
			<div className='content-searchBar'>
				<form onSubmit={handleSearch} style={{ width: '100%' }}>
					<input
						className='input-searchBar'
						type='text'
						placeholder='Search'
						name='busqueda'
						value={busqueda}
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
