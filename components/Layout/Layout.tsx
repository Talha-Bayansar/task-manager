import React from 'react';
import { Navbar } from '..';

export const Layout = ({ children }) => {
	return (
		<div>
			<Navbar />
			<div>{children}</div>
		</div>
	);
};
