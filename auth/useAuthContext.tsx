import { createContext, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const api = {};
	return <AuthContext.Provider value={api}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
