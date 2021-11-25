import { createContext, useContext } from 'react';

const HttpContext = createContext(null);

export const HttpProvider = ({ children }) => {
	const get = async (url: string) => {
		const options = {
			method: 'GET',
			headers: {
				Authorization: 'Bearer '
			}
		};
		const response = await fetch(url, options);
		const data = await response.json();
		return data;
	};
	const api = {
		get
	};
	return <HttpContext.Provider value={api}>{children}</HttpContext.Provider>;
};

export const useHttpContext = () => useContext(HttpContext);
