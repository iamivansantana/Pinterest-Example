const baseUrl = process.env.REACT_APP_PICTURES_API_URL;

//Metodo para hacer peticion al API
const fetchGetData = (endpoint: string) => {
	const url = `${baseUrl}/${endpoint}`;
	return fetch(url);
};

export { fetchGetData };
