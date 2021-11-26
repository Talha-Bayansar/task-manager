import React from 'react';
import styles from './Menu.module.scss';
import { GrClose } from 'react-icons/gr';
import { MenuItem, useMenuContext } from '../..';
import { useRouter } from 'next/dist/client/router';
import { useAuthContext } from '../../../authentication';

interface IMenuItem {
	name: string;
	onClick: () => any;
}

export const Menu = () => {
	const { toggleMenu } = useMenuContext();
	const { logout } = useAuthContext();
	const router = useRouter();

	const menuItems: IMenuItem[] = [
		{
			name: 'Tasks',
			onClick: () => {
				router.push('/');
				toggleMenu();
			}
		},
		{
			name: 'Subjects',
			onClick: () => {
				router.push('/subjects');
				toggleMenu();
			}
		},
		{
			name: 'Logout',
			onClick: () => {
				logout();
				toggleMenu();
			}
		}
	];

	return (
		<div className={styles.menu}>
			<div className={styles.menuHeading}>
				<button className={styles.closeButton} onClick={toggleMenu}>
					<GrClose size="2rem" />
				</button>
			</div>
			<div className={styles.menuList}>
				{menuItems.map((item, i) => (
					<MenuItem
						className={styles.menuListItem}
						key={i}
						name={item.name}
						onClick={item.onClick}
					/>
				))}
			</div>
		</div>
	);
};
