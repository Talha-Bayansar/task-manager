import React from 'react';
import styles from './Chip.module.scss';

interface Props {
	size?: string;
	name: string;
	active?: boolean;
	onClick?: (e: any) => void;
}

export const Chip = ({ size, name, active, onClick }: Props) => {
	return (
		<div
			className={`${styles.chip} ${size === 'sm' && styles.small} ${
				active && styles.active
			}`}
			id={name}
			onClick={onClick}
		>
			{name}
		</div>
	);
};
