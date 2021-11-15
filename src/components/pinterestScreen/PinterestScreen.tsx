import NavBar from '../navBar/NavBar';
import PicturesList from '../picturesCard/PicturesList';
import SearchBar from '../searchBar/SearchBar';
import './PinterestScreen.css';
const PinterestScreen = () => {
	return (
		<>
			<div className='body'>
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
							<div className='pinterest-content'>
								{/* <div style={{ backgroundColor: 'tomato' }}> primero</div> */}

								<PicturesList />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PinterestScreen;
