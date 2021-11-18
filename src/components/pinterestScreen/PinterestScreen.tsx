import { useContext, useEffect, useState } from 'react';
import ModalContext from '../../context/modalContext/ModalContext';
import PicturesContext from '../../context/picturesContext/PicturesContext';
import Modal from '../modal/Modal';
import ModalScreen from '../modal/ModalScreen';
import NavBar from '../navBar/NavBar';
import PicturesList from '../picturesCard/PicturesList';
import SearchBar from '../searchBar/SearchBar';
import './PinterestScreen.css';
const PinterestScreen = () => {
	//Acceso al Context
	const { pictureState, addItems } = useContext(PicturesContext);
	//Context de las funciones de la ventana Modal
	const { isOpen, setIsOpen, imagenModal } = useContext(ModalContext);

	//Desestructuracion del state
	const { busqueda, imagenes } = pictureState;

	//State que indica cuantas imagenes agregar por pagina
	// const [imagenesxpagina, setImagenesxpagina] = useState(30);
	const imagenesxpagina: number = 30;
	//State que guarda la pagina en la que estamos del resultado de la API
	const [paginaactual, guardarPaginaActual] = useState(1);
	//State que guarda el total de paginas del resultado de la API
	const [totalpaginas, guardaTotalPaginas] = useState(1);

	//useEffect para consultar la api cada que paginaActual o busqueda Cambian.
	useEffect(() => {
		//Si la busqueda esta vacia no se ejecuta la consulta  ?perPage=42&page=6
		if (busqueda === '') return;

		const key = '18584834-b8939c3a0661f41d9c3094cbd';
		const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesxpagina}&page=${paginaactual}`;

		const consultarAPI = async () => {
			try {
				const respuesta = await fetch(url);
				const resultado = await respuesta.json();

				//se utiliza array.concat() para agregar las imagenes de la nueva pagina a las anteriores.
				const newResultado = imagenes.concat(resultado.hits);

				// guardarImagenes(newResultado);
				addItems(newResultado);
				//calcula el total de paginas
				const calcularTotalPaginar = Math.ceil(
					resultado.totalHits / imagenesxpagina
				);
				guardaTotalPaginas(calcularTotalPaginar);
			} catch (error) {
				console.log(error);
			}
		};

		consultarAPI();

		// eslint-disable-next-line
	}, [paginaactual, busqueda]);

	//Effect para  Infinite scroll.
	useEffect(() => {
		const spinner: Element | null = document.querySelector('.spinner');

		function ventana(e: any) {
			//Obtiene el alto de la pagina, alto de la barra, y el scroll recorrido
			let { scrollTop, clientHeight, scrollHeight } = document.documentElement;

			//Condicion para InfiniteScroll
			//En moviles algunos navegadores agregan 56px que agregamos a la suma de (scrollTop + clienteHeight)
			//se resta 1 a scrollHeight para evitar conflicto con decimales.
			if (56 + scrollTop + clientHeight >= scrollHeight - 1) {
				//Si la condicion se cumple Se pasa a la pagina siguiente
				const nuevaPaginaSiguiente = paginaactual + 1;

				//Return si se terminana las paginas
				if (nuevaPaginaSiguiente > totalpaginas) return;

				// Mostrar Spinner/Loader
				if (spinner) spinner.classList.add('show');

				setTimeout(() => {
					//Se agrega la pagina siguiente a la acual.
					guardarPaginaActual(nuevaPaginaSiguiente);
					// Ocultar Spinner/Loader
					if (spinner) spinner.classList.remove('show');
				}, 600);
			}
		}

		//Se agrega la funcion ventana al evento scroll.
		window.addEventListener('scroll', ventana);

		// Devolvemos una función para anular la suscripción al evento
		// y evitar que cada pagina nueva se dupliquen resultados.
		return () => {
			window.removeEventListener('scroll', ventana);
		};
	});

	return (
		<>
			<div className='body'>
				<div style={{ position: 'relative', zIndex: 1 }}>
					<Modal open={isOpen} onClose={() => setIsOpen(false)}>
						{imagenModal ? (
							<ModalScreen
								largeImageURL={imagenModal.largeImageURL}
								tags={imagenModal.tags}
							/>
						) : null}
					</Modal>
				</div>
				<div className='containerProject pinterest-screen'>
					<div className='pinterest-grid'>
						<div className='pinterest-grid-area-navBar'>
							<div className='navbar-fixed'>
								<NavBar />
							</div>
						</div>
						<div className='pinterest-grid-area-content'>
							<div className='pinterest-searchBar'>
								<SearchBar />
							</div>
							<div className='pinterest-content '>
								{imagenes.length === 0 ? (
									<div className='flex flex-center' style={{ color: 'lightgray' }}>
										<h1>No se encontraron resultados</h1>
									</div>
								) : null}
								<PicturesList imagenes={imagenes} />
								<div className='flex flex-center'>
									<div className='spinner'></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PinterestScreen;
