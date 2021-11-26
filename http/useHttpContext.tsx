import { getCookie } from 'cookies-next';
import { createContext, useContext } from 'react';
import { useAuthContext } from '../authentication';

interface IHttpContext {
	get: <T>(url: string) => Promise<T>;
	post: <T>(url: string, body: any) => Promise<T>;
	put: <T>(url: string, body: any) => Promise<T>;
	del: <T>(url: string) => Promise<T>;
}

const HttpContext = createContext<IHttpContext | null>(null);

export const HttpProvider = ({ children }) => {
	const { getToken } = useAuthContext();

	const get = async (url: string) => {
		const options = {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${getToken()}`,
				'Content-Type': 'application/json'
			}
		};
		const response = await fetch(url, options);
		const data = await response.json();
		return data;
	};

	const post = async (url: string, body: any) => {
		const options = {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${getToken()}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		};

		const response = await fetch(url, options);
		const data = await response.json();
		return data;
	};

	const put = async (url: string, body: any) => {
		const options = {
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${getToken()}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		};

		const response = await fetch(url, options);
		const data = await response.json();
		return data;
	};

	const del = async (url: string) => {
		const options = {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${getToken()}`,
				'Content-Type': 'application/json'
			}
		};

		const response = await fetch(url, options);
		const data = await response.json();
		return data;
	};

	const api = {
		get,
		post,
		put,
		del
	};
	return <HttpContext.Provider value={api}>{children}</HttpContext.Provider>;
};

export const useHttpContext = () => useContext(HttpContext);
