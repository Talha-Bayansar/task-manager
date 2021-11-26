import React, { createContext, useContext, useState } from 'react';

interface IMenuContext {
	isActive: boolean;
	toggleMenu: () => void;
}

const MenuContext = createContext<IMenuContext | null>(null);

export const MenuProvider = ({ children }) => {
	const [isActive, setIsActive] = useState<boolean>(false);

	const toggleMenu = () => {
		setIsActive(!isActive);
	};

	const api = {
		isActive,
		toggleMenu
	};

	return <MenuContext.Provider value={api}>{children}</MenuContext.Provider>;
};

export const useMenuContext = () => useContext(MenuContext);
