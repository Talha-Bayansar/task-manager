import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { Navbar } from '..';
import { Menu, useMenuContext } from '../../menu';
import styles from './Layout.module.scss';

export const Layout = ({ children }) => {
	const { isActive } = useMenuContext();
	const router = useRouter();
	return (
		<div>
			{router.pathname !== '/login' && isActive && <Menu />}
			{router.pathname !== '/login' && <Navbar />}
			<div className={styles.layoutChildrenContainer}>{children}</div>
		</div>
	);
};
