import { createContext, useContext, useEffect, useState } from 'react';
import { getCookie, setCookies } from 'cookies-next';
import { useRouter } from 'next/dist/client/router';
import { CookieValueTypes } from 'cookies-next/lib/types';

interface IAuthContext {
	login: (email: string, password: string) => Promise<any>;
	getToken: () => CookieValueTypes;
	getUser: () => CookieValueTypes;
}

const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }) => {
	const authUrl = `${process.env.NEXT_PUBLIC_API_URL}/auth/local`;
	const router = useRouter();

	const getToken = () => getCookie('token');

	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
		getToken() !== null
	);

	const getUser = () => getCookie('user');

	useEffect(() => {
		if (router.pathname !== '/login') {
			console.log('Checking if logged in...');
			if (!getToken()) {
				setIsAuthenticated(false);
				router.push('/login');
			} else {
				setIsAuthenticated(true);
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

	const api = { login, getToken, getUser };
	return <AuthContext.Provider value={api}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
