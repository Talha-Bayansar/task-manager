import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { Navbar } from '..';
import styles from './Layout.module.scss';

export const Layout = ({ children }) => {
	const router = useRouter();
	return (
		<div>
			{router.pathname !== '/login' && <Navbar />}
			<div className={styles.layoutChildrenContainer}>{children}</div>
		</div>
	);
};
