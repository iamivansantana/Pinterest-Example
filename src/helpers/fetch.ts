const baseUrl = process.env.REACT_APP_PICTURES_API_URL;

//Metodo para hacer peticion al API
const fetchGetData = (endpoint: string) => {
	const url = `${baseUrl}/${endpoint}`;
	return fetch(url);
};

//Ejemplo de metodo que recibe un endpoint, data y method.
const fetchEjemplo = (endpoint: string, data: {}, method: string = 'GET') => {
	const url = `${baseUrl}/${endpoint}`;

	if (method === 'GET') {
		return fetch(url);
	} else {
		return fetch(url, {
			method,
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(data),
		});
	}
};

export { fetchGetData, fetchEjemplo };
