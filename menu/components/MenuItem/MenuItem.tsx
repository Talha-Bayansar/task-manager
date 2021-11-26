import React from 'react';
import styles from './MenuItem.module.scss';

interface Props {
	name: string;
	onClick: () => any;
	className?: any;
}

export const MenuItem = ({ name, onClick, className }: Props) => {
	return (
		<button className={`${styles.menuItem} ${className}`} onClick={onClick}>
			{name}
		</button>
	);
};
