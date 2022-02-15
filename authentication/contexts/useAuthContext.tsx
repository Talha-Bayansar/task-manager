import { createContext, useContext, useEffect, useState } from 'react';
import { getCookie, removeCookies, setCookies } from 'cookies-next';
import { useRouter } from 'next/dist/client/router';
import { CookieValueTypes } from 'cookies-next/lib/types';
import { User } from '..';

interface IAuthContext {
	login: (email: string, password: string) => Promise<any>;
	logout: () => Promise<any>;
	getToken: () => CookieValueTypes;
	getUser: () => User;
}

const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }) => {
	const authUrl = `${process.env.NEXT_PUBLIC_API_URL}/auth/local`;
	const router = useRouter();

	const getToken = () => getCookie('token');

	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
		getToken() !== null
	);

	const getUser = () => {
		const userData = getCookie('user');
		let userObject: User | null = null;
		if (userData) {
			userObject = JSON.parse(userData.toString()) as User;
		}
		return userObject;
	};

	useEffect(() => {
		if (router.pathname !== '/login') {
			if (!getToken()) {
				router.push('/login');
			}
		}
	}, [router]);

	const login = async (email, password) => {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				identifier: email,
				password: password
			})
		};

		try {
			const response = await fetch(authUrl, options);
			const data = await response.json();
			if (data.jwt) {
				setCookies('token', data.jwt);
				setCookies('user', JSON.stringify(data.user));
			}
			return data;
		} catch (error) {
			throw error;
		}
	};

	const logout = async () => {
		removeCookies('token');
		removeCookies('user');
		router.push('/login');
	};

	const api = { login, getToken, getUser, logout };
	return <AuthContext.Provider value={api}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
