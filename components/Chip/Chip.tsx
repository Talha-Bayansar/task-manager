import React from 'react';
import styles from './Chip.module.scss';

interface Props {
	size?: string;
	name: string;
}

export const Chip = ({ size, name }: Props) => {
	return (
		<div className={`${styles.chip} ${size === 'sm' && styles.small}`}>
			{name}
		</div>
	);
};
