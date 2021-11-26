import React, { useEffect, useState } from 'react';
import { useAuthContext, User } from '../../authentication';
import styles from './Navbar.module.scss';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';

export const Navbar = () => {
	const { getUser } = useAuthContext();
	const [user, setUser] = useState<User>(null);

	useEffect(() => {
		setUser(getUser());
	}, [getUser]);

	return (
		<div className={styles.navbar}>
			<button className={styles.navbarMenuIcon}>
				<HiOutlineMenuAlt1 size={'2rem'} />
			</button>
			<p className={styles.navbarHeading}>Welcome {user?.username}!</p>
		</div>
	);
};
