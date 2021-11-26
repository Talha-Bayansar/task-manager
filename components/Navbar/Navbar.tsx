import React, { useEffect, useState } from 'react';
import { useAuthContext, User } from '../../authentication';
import styles from './Navbar.module.scss';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { useMenuContext } from '../../menu';

export const Navbar = () => {
	const { getUser } = useAuthContext();
	const { toggleMenu } = useMenuContext();
	const [user, setUser] = useState<User>(null);

	useEffect(() => {
		setUser(getUser());
	}, [getUser]);

	return (
		<div className={styles.navbar}>
			<button className={styles.navbarMenuIcon} onClick={toggleMenu}>
				<HiOutlineMenuAlt1 size={'2rem'} />
			</button>
			<p className={styles.navbarHeading}>Welcome {user?.username}!</p>
		</div>
	);
};
